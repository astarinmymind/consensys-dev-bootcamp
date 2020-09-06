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
- Created private blockchain (genesis.json)
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
 

