# Consensys Blockchain Developer Bootcamp 2020

## Coding my own Blockchain from Scratch in Python3 - blockchain.py

- implemented a simple Proof of Work algorithm similar to HashCash
- used Python Flask to communicate with blockchain through http requests
- used Postman to interact with blockchain (create new transaction, mine new block, return full blockchain)
- implemented consensus algorithm by checking chains in other nodes and finding the longest valid chain

## Generating Ethereum Accounts in Javascript
- Learning public key cryptography and digital signatures. 
- Generate a private key, derive public keys from the private key and determine the associated accounts.

## Using Geth (Go-Ethereum)
- Geth (Go-Ethereum) is a command line interface for running a full ethereum node implemented inGo. 
- Geth is used to mine real ether, transfer funds between addresses, create contracts and send transactions, and explore block history.
- Played around with geth javascript console ($ geth console)
- Created private blockchain with proof of work consensus mechanism (**test-private-blockchain**)

    **genesis.json**
    - config: defines settings for private blockchain
    - chainId: identifies blockchain 
    - alloc: allows creation of addresses and fills account with ether upon initialization of blockchain 
          - left empty in order to fill accounts by mining ether
    - difficulty: indicates how difficult to discover valid hash of block 
          - defines mining target
          - calculated according to previous block difficulty and timestamp 
          - difficulty indicates how many average calculations miner will have to complete to find block 
          - value fluctuates to maintain target block generation time 
    - extraData: optional 32 byte value to add information
    - gasLimit: sets chain-wide limit of gas expenditure per block 
    - parentHash: keccak256 hash of parent block's header 
    - timestamp: output of Unix time() function at block's creation 
          - used in calculation of difficulty level 
          - allows verification of order of blocks in the chain 
    - created new account 
    - mined private chain
    - sent transaction 
    - checked balance
    
 - Created private blockchain with proof of authority consensus mechanism (**geth-poa**)
    - used native geth proof-of-authority protocol *clique*
    - configured clique via puppeth for creating custom genesis blocks
    - used bootnode to act as a router/hub where all nodes pass information and receive information from this node 
    - launched node1 with genesis block (node1 is a mining node) 
    - launched node2 and node3 to interact with blockchain
    - sent transactions from nodes to each other 
    
## Writing Smart Contracts 

**Proof of Existence (proof-of-existence)**
- used ganache-cli for development blockchain 
- practice with truffle create, migrate, console
- three versions: one proof, array of proofs, mapping of proofs
- used infura to deploy to rinkeby testnet 

**Multi-Signature Wallet (MultiSignatureWallet.sol)**
- multisignature wallet: an account that requires some m-of-n quorum of approved private keys to approve a transaction before it is executed
- learned how to handle complex interactions between multiple users on one contract
- learned how to avoid loops and implement voting
- learned to assess possible attacks on contracts 
- worked with modifiers, events/emit, indexed keywords
- used truffle develop to interact with contract
 
## Assignment: SimpleBank

