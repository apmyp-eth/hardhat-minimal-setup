require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    /* README: https://hardhat.org/hardhat-network/docs/metamask-issue */
    hardhat: {
      chainId: 1337,
      forking: {
        url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_FORK_API_KEY}`,
        blockNumber: 17460000 // block pinning, read https://hardhat.org/hardhat-network/docs/guides/forking-other-networks#pinning-a-block
      }
    },
  }
};
