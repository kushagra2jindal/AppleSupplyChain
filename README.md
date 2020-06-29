# AppleSupplyChain
Transparent supply chain using ethereum blockchain.

# Prerequirements
1. node.js and npm.
2. Ganache-cli or ganache running on port 8545.
3. truffle

To install ganache-cli:-
``` npm install -g ganache-cli ```

To install truffle:-
``` npm install -g truffle ```

# Installation

Cloning the project https://github.com/kushagra2jindal/AppleSupplyChain.git

Install the npm packages

```npm install```

# Starting Ganache-CLI

```ganache-cli```

# Compile and Migrate the smart contract

``` truffle compile ```

``` truffle migrate ```

This will migrate the two smart contract 1_initial_migration.js and 2_apple.js on the ganache.
Make you you update the smart contract address in the src/index.js file.
