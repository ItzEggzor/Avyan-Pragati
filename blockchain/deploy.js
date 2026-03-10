

const { ethers } = require('ethers');
const artifact = require('./ComplaintRegistry.json');

const CONTRACT_ABI = artifact.abi;
const CONTRACT_BYTECODE = artifact.bytecode;

async function deploy() {
    console.log('🔗 Avyan Pragati — Blockchain Complaint Registry Deployer');
    console.log('═══════════════════════════════════════════════════════════\n');

    
    const PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || 'YOUR_PRIVATE_KEY_HERE';
    
    if (PRIVATE_KEY === 'YOUR_PRIVATE_KEY_HERE') {
        console.log('⚠️  No private key set. Generating a new demo wallet...\n');
        const wallet = ethers.Wallet.createRandom();
        console.log('✅ NEW WALLET GENERATED (save these safely!):');
        console.log('   Address:     ', wallet.address);
        console.log('   Private Key: ', wallet.privateKey);
        console.log('\n📋 Next steps:');
        console.log('   1. Fund this address with test MATIC:');
        console.log('      https://faucet.polygon.technology/');
        console.log('      (Select "Polygon Amoy" and paste the address above)');
        console.log('\n   2. Re-run with your private key:');
        console.log('      $env:DEPLOYER_PRIVATE_KEY="' + wallet.privateKey + '"; node deploy.js');
        console.log('\n   3. Copy the CONTRACT_ADDRESS from the output and');
        console.log('      paste it into blockchain-config.js');
        return;
    }

    const provider = new ethers.providers.JsonRpcProvider('https://rpc-amoy.polygon.technology/');
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    console.log('📡 Network:   Polygon Amoy Testnet');
    console.log('🔑 Deployer: ', wallet.address);

    const balance = await provider.getBalance(wallet.address);
    console.log('💰 Balance:  ', ethers.utils.formatEther(balance), 'MATIC');

    if (balance.eq(0)) {
        console.log('\n❌ No MATIC in wallet. Get free test MATIC from:');
        console.log('   https://faucet.polygon.technology/');
        return;
    }

    console.log('\n⏳ Deploying ComplaintRegistry contract...\n');

    const factory = new ethers.ContractFactory(CONTRACT_ABI, CONTRACT_BYTECODE, wallet);
    const contract = await factory.deploy({
        gasLimit: 2000000,
        maxPriorityFeePerGas: ethers.utils.parseUnits('30', 'gwei'),
        maxFeePerGas:         ethers.utils.parseUnits('35', 'gwei')
    });

    console.log('📤 Tx hash:  ', contract.deployTransaction.hash);
    console.log('⏳ Waiting for confirmation...');

    await contract.deployed();

    console.log('\n✅ CONTRACT DEPLOYED SUCCESSFULLY!');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('📍 CONTRACT ADDRESS:', contract.address);
    console.log('🔍 View on explorer: https://amoy.polygonscan.com/address/' + contract.address);
    console.log('\n📋 ACTION REQUIRED:');
    console.log('   Open: blockchain-config.js');
    console.log('   Set CONTRACT_ADDRESS =', '"' + contract.address + '"');
    console.log('   Set PLATFORM_PRIVATE_KEY = your private key');
    console.log('═══════════════════════════════════════════════════════════');
}

deploy().catch(console.error);
