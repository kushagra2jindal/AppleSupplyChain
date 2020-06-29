# AppleSupplyChain
Transparent supply chain using ethereum blockchain. For more details refer to the blog:- https://medium.com/integraate/blockchain-and-the-supply-chain-95d17f4090a0

# Prerequirements
1. node.js and npm.
2. Ganache-cli or ganache running on port 8545.
3. truffle
4. ipfs - For more details on IPFS refer to the blog:- https://medium.com/integraate/blockchain-and-the-supply-chain-ipfs-ed9a2b4decab

To install ganache-cli:-
``` npm install -g ganache-cli ```

To install truffle:-
``` npm install -g truffle ```

To install IPFS
``` Download the appropriate setup, according to your Operating System from here, and execute the install.sh file. ```

# Installation

Cloning the project https://github.com/kushagra2jindal/AppleSupplyChain.git

Install the npm packages

```npm install```

# Starting Ganache-CLI

```ganache-cli```

# Starting IPFS server

```ipfs daemon```

# Compile and Migrate the smart contract

``` truffle compile ```

``` truffle migrate ```

This will migrate the two smart contract 1_initial_migration.js and 2_apple.js on the ganache.
Make you you update the smart contract address in the src/index.js file.


# Starting the Frontend

```node index.js```

The server has started and can be viewed on http://localhost:3000/

# Jam contract

The project is extending with a special jam contract. 
This contract provide additional functionality to our supply chain. For example, a Jam manufaturing unit buys some apple and create jam from it, this contract can be used to track the apples used in jam and other details about the jam.


![alt text](https://github.com/kushagra2jindal/AppleSupplyChain/blob/master/Screenshots/AppleOutput.png)
<Output Screenshot>
