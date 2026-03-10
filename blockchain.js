

(function () {
    'use strict';

    function isBlockchainConfigured() {
        return (
            typeof BLOCKCHAIN_CONFIG !== 'undefined' &&
            BLOCKCHAIN_CONFIG.CONTRACT_ADDRESS !== 'NOT_DEPLOYED_YET' &&
            BLOCKCHAIN_CONFIG.PLATFORM_PRIVATE_KEY !== 'NOT_SET'
        );
    }

    async function hashComplaint(complaint) {
        const canonical = JSON.stringify({
            id:          complaint.id          || complaint.complaintId || '',
            title:       complaint.title        || '',
            category:    complaint.category     || '',
            description: complaint.description  || '',
            district:    complaint.district     || '',
            lat:         complaint.lat          || complaint.latitude || 0,
            lng:         complaint.lng          || complaint.longitude || 0,
            timestamp:   complaint.timestamp    || ''
        });

        const encoded = new TextEncoder().encode(canonical);
        const hashBuffer = await crypto.subtle.digest('SHA-256', encoded);
        const hashArray  = Array.from(new Uint8Array(hashBuffer));
        return '0x' + hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    
    async function logComplaintToBlockchain(complaint) {
        if (!isBlockchainConfigured()) {
            console.warn('[Blockchain] Contract not yet deployed. Skipping chain log.');
            return null;
        }

        if (typeof ethers === 'undefined') {
            console.warn('[Blockchain] ethers.js not loaded. Skipping chain log.');
            return null;
        }

        try {
            const provider = new ethers.providers.JsonRpcProvider(BLOCKCHAIN_CONFIG.RPC_URL);
            const wallet   = new ethers.Wallet(BLOCKCHAIN_CONFIG.PLATFORM_PRIVATE_KEY, provider);
            const contract = new ethers.Contract(
                BLOCKCHAIN_CONFIG.CONTRACT_ADDRESS,
                BLOCKCHAIN_CONFIG.ABI,
                wallet
            );

            const complaintId = complaint.id || complaint.complaintId || String(Date.now());
            const dataHash    = await hashComplaint(complaint);

            console.log('[Blockchain] Logging complaint:', complaintId);
            console.log('[Blockchain] Hash:', dataHash);

            let gasOverrides = { gasLimit: 200000 };
            try {
                const feeData = await provider.getFeeData();
                if (feeData.maxFeePerGas) {
                    gasOverrides.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas
                        ? feeData.maxPriorityFeePerGas.mul(130).div(100)
                        : ethers.utils.parseUnits('50', 'gwei');
                    gasOverrides.maxFeePerGas = feeData.maxFeePerGas.mul(130).div(100);
                } else if (feeData.gasPrice) {
                    gasOverrides.gasPrice = feeData.gasPrice.mul(130).div(100);
                }
            } catch (_) {
                gasOverrides.maxPriorityFeePerGas = ethers.utils.parseUnits('100', 'gwei');
                gasOverrides.maxFeePerGas         = ethers.utils.parseUnits('150', 'gwei');
            }
            const tx = await contract.logComplaint(complaintId, dataHash, gasOverrides);

            console.log('[Blockchain] Tx submitted:', tx.hash);
            const receipt = await tx.wait(1);
            console.log('[Blockchain] Confirmed in block:', receipt.blockNumber);

            return {
                txHash:      tx.hash,
                dataHash:    dataHash,
                blockNumber: receipt.blockNumber,
                explorerUrl: `${BLOCKCHAIN_CONFIG.EXPLORER_URL}/tx/${tx.hash}`
            };

        } catch (err) {
            console.error('[Blockchain] Failed to log on-chain (complaint still saved):', err.message);
            return null;
        }
    }

    
    async function verifyComplaintOnChain(complaintId) {
        if (!isBlockchainConfigured() || typeof ethers === 'undefined') return null;

        try {
            const provider = new ethers.providers.JsonRpcProvider(BLOCKCHAIN_CONFIG.RPC_URL);
            const contract = new ethers.Contract(
                BLOCKCHAIN_CONFIG.CONTRACT_ADDRESS,
                BLOCKCHAIN_CONFIG.ABI,
                provider
            );

            const record = await contract.getComplaint(complaintId);
            if (!record || record.timestamp.eq(0)) return null;

            return {
                complaintId: record.complaintId,
                dataHash:    record.dataHash,
                timestamp:   new Date(record.timestamp.toNumber() * 1000).toISOString(),
                loggedBy:    record.loggedBy
            };
        } catch (err) {
            console.warn('[Blockchain] Verify failed:', err.message);
            return null;
        }
    }

    window.AvyanBlockchain = {
        logComplaintToBlockchain,
        verifyComplaintOnChain,
        hashComplaint,
        isConfigured: isBlockchainConfigured
    };

})();
