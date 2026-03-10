

const solc = require('solc');
const fs = require('fs');
const path = require('path');

const source = `
pragma solidity ^0.8.20;

contract ComplaintRegistry {
    struct ComplaintRecord {
        string complaintId;
        bytes32 dataHash;
        uint256 timestamp;
        address loggedBy;
    }

    mapping(string => ComplaintRecord) private _complaints;

    event ComplaintLogged(
        string indexed complaintId,
        bytes32 dataHash,
        uint256 timestamp,
        address indexed loggedBy
    );

    function logComplaint(string calldata complaintId, bytes32 dataHash) external {
        require(_complaints[complaintId].timestamp == 0, "Already logged");
        _complaints[complaintId] = ComplaintRecord({
            complaintId: complaintId,
            dataHash: dataHash,
            timestamp: block.timestamp,
            loggedBy: msg.sender
        });
        emit ComplaintLogged(complaintId, dataHash, block.timestamp, msg.sender);
    }

    function getComplaint(string calldata complaintId)
        external view
        returns (ComplaintRecord memory)
    {
        return _complaints[complaintId];
    }
}
`;

const input = {
    language: 'Solidity',
    sources: { 'ComplaintRegistry.sol': { content: source } },
    settings: {
        optimizer: { enabled: true, runs: 200 },
        outputSelection: { '*': { '*': ['abi', 'evm.bytecode.object'] } }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

if (output.errors) {
    const errors = output.errors.filter(e => e.severity === 'error');
    if (errors.length) {
        console.error('Compilation errors:');
        errors.forEach(e => console.error(e.formattedMessage));
        process.exit(1);
    }
}

const contract = output.contracts['ComplaintRegistry.sol']['ComplaintRegistry'];
const artifact = {
    contractName: 'ComplaintRegistry',
    abi: contract.abi,
    bytecode: '0x' + contract.evm.bytecode.object
};

fs.writeFileSync(
    path.join(__dirname, 'ComplaintRegistry.json'),
    JSON.stringify(artifact, null, 2)
);

console.log('✅ Compiled successfully → ComplaintRegistry.json');
console.log('   ABI entries:', artifact.abi.length);
console.log('   Bytecode size:', Math.round(artifact.bytecode.length / 2), 'bytes');
