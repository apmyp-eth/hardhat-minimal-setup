# Hardhat Minimal Setup project

I created this project as a reminder or, if you like, a template for future projects.

This project uses and is ready to configure the following plugins:

* [solidity-coverage](https://www.npmjs.com/package/solidity-coverage) - coverage of contract code with tests
* [hardhat-gas-reporter](https://www.npmjs.com/package/hardhat-gas-reporter) - gas cost estimate, uses CoinMarketCap to get prices
* [hardhat-etherscan](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan) - to verify contracts on Etherscan/Bscscan/etc

Also in `hardhat.config.json` I added the setting for working with the actual Goerli test network using the Alchemy service.

**WARNING: copy `.env.example` to `.env`!**

# Project creatiion

The following commands have been used:

```console
mkdir {project}
cd {project}
npm init
npm install --save-dev hardhat
npx hardhat
```

# Typical commands when working with a project

## Compilation

```console
npx hardhat clean && npx hardhat compile
```

## Running tests, checking code coverage with tests

```console
npx hardhat test [--grep text]
REPORT_GAS=true npx hardhat test
npx hardhat coverage
```

In test code, you can add `.only` to `it` to run a specific test, or you can use `grep` in the console when calling the tests.

## Tasks

The tasks code is in the `tasks` folder, the launch examples is in the code.


## Running a local node and deploying a contract on it

```
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

## Running a local node in fork mode

There is `ALCHEMY_FORK_API_KEY` parameter in the `.env.example` should be set.

```
npx hardhat node --config hardhat-fork.config.js
```

## Contract code verification on Etherscan

```console
npx hardhat verify --network goerli {contractAddress}
```

## Command line completion

For convenience, in order not to write `npx hardhat` and commands are automatically substituted, you can:

```console
sudo npm install --global hardhat-shorthand
hardhat-completion install
```

Now you can type commands as follows by finishing them with TAB:

```console
> hh te[press TAB]
> hh test
```