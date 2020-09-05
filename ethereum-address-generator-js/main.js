// IMPORTS

// Generate random input to generate private key 
const BIP39 = require("bip39")

// Use ethereumjs-wallet library to generate private key from hex seed
const hdkey = require('ethereumjs-wallet/hdkey')

// Import ethereumjs wallet
const Wallet = require('ethereumjs-wallet')

// Hashing algorithm to derive ehtereum address from public key
const keccak256 = require('js-sha3').keccak256;

// Sign transactions with ehtereumjs-tx library 
const EthereumTx = require('ethereumjs-tx')



// FUNCTIONS

// Generate a random mnemonic (uses crypto.randomBytes under the hood), defaults to 128-bits of entropy
function generateMnemonic(){
    return BIP39.generateMnemonic()
}

// Check if mnemomic is valid 
var isValid = BIP39.validateMnemonic("Enter your mnemonic here") // This will return false

// Generate seed which will generate private key 
function generateSeed(mnemonic){
    return BIP39.mnemonicToSeed(mnemonic)
}

// Generate Private Key 
function generatePrivKey(mnemonic){
    const seed = generateSeed(mnemonic)
    return hdkey.fromMasterSeed(seed).derivePath(`m/44'/60'/0'/0/0`).getWallet().getPrivateKey()
}

// Derive Public Key
function derivePubKey(privKey){
    const wallet = Wallet.fromPrivateKey(privKey)    
    return wallet.getPublicKey()
}

// Take keccak-256 hash of public key --> return 32 bytes but need to trim to last 20 bytes to get address 
function deriveEthAddress(pubKey){
    const address = keccak256(pubKey) // keccak256 hash of publicKey
    // Get the last 20 bytes of the public key
    return "0x" + address.substring(address.length - 40, address.length)    
}

// Sign transactions with private key 
function signTx(privKey, txData){
    const tx = new EthereumTx(txData)
    tx.sign(privKey)
    return tx
}

// Recover sender address from signed transaction
function getSignerAddress(signedTx){
    return "0x" + signedTx.getSenderAddress().toString('hex')
}

var mnemonicVue = new Vue({
    el:"#app",
    data: {  
        mnemonic: "",
        privKey: "",
        pubKey: "",
        ETHaddress: "",
        sampleTransaction: {
            nonce: '0x00',
            gasPrice: '0x09184e72a000', 
            gasLimit: '0x2710',
            to: '0x31c1c0fec59ceb9cbe6ec474c31c1dc5b66555b6', 
            value: '0x10', 
            data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
            chainId: 3
        },
        signedSample: {},
        recoveredAddress: ""
    },
    methods:{
        generateNew: function(){
            this.mnemonic = generateMnemonic()
        },
        signSampleTx: function(){
            this.signedSample = signTx(this.privKey, this.sampleTransaction)
            console.log("signed Sample", this.signedSample)
        }
    },
    watch: {
        mnemonic: function(val){
            this.privKey = generatePrivKey(val)
        },
        privKey: function(val){
            this.pubKey = derivePubKey(val)
        },
        pubKey: function(val){
            this.ETHaddress = deriveEthAddress(val)
            this.recoveredAddress = ""
        },
        signedSample: function(val){
            this.recoveredAddress = getSignerAddress(val)
        }
    }
})
