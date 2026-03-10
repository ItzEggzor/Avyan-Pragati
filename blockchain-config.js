

const BLOCKCHAIN_CONFIG = {
    CONTRACT_ADDRESS: '0x85E05a2395EbDf0982690ef1721a2e90e74D74B9',

    PLATFORM_PRIVATE_KEY: '0x23f1cab3aecba526fbb78f545555716c780b44b319da7d879acf72ae294fda2a',

    RPC_URL: 'https://rpc-amoy.polygon.technology/',

    EXPLORER_URL: 'https://amoy.polygonscan.com',

    ABI: [
        {
            "inputs": [
                { "internalType": "string", "name": "complaintId", "type": "string" },
                { "internalType": "bytes32", "name": "dataHash", "type": "bytes32" }
            ],
            "name": "logComplaint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                { "internalType": "string", "name": "complaintId", "type": "string" }
            ],
            "name": "getComplaint",
            "outputs": [
                {
                    "components": [
                        { "internalType": "string", "name": "complaintId", "type": "string" },
                        { "internalType": "bytes32", "name": "dataHash", "type": "bytes32" },
                        { "internalType": "uint256", "name": "timestamp", "type": "uint256" },
                        { "internalType": "address", "name": "loggedBy", "type": "address" }
                    ],
                    "internalType": "struct ComplaintRegistry.ComplaintRecord",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                { "indexed": true,  "internalType": "string",  "name": "complaintId", "type": "string" },
                { "indexed": false, "internalType": "bytes32", "name": "dataHash",    "type": "bytes32" },
                { "indexed": false, "internalType": "uint256", "name": "timestamp",   "type": "uint256" },
                { "indexed": true,  "internalType": "address", "name": "loggedBy",    "type": "address" }
            ],
            "name": "ComplaintLogged",
            "type": "event"
        }
    ]
};
