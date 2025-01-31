// hardhat.config.js
require('dotenv').config(); // Import dotenv for environment variable configuration
const { PRIVATE_KEY } = process.env; // Access PRIVATE_KEY from environment variables

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY", // Replace with your Alchemy API key
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  // Other configurations...
};
