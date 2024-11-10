import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const deployerKey = process.env.DEPLOYER_KEY || "";
const bscTestnetUrl = process.env.BSC_TESTNET_URL || "";

const config: HardhatUserConfig & {
  etherscan: { apiKey: string | Record<string, string> };
} = {
  solidity: {
    version: "0.8.27",
    settings: { optimizer: { enabled: true, runs: 200 } },
  },
  paths: {
    sources: "./src",
  },
  networks: {
    bscTestnet: {
      accounts: [deployerKey],
      url: bscTestnetUrl || "https://bsc-testnet-dataseed.bnbchain.org",
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      bscTestnet: process.env.BSC_TESTNET_ETHERSCAN_API_KEY || "",
    },
  },
};

export default config;
