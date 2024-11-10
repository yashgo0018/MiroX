import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import dotenv from "dotenv";

dotenv.config();

const deployerKey = process.env.DEPLOYER_KEY || "";
const bscTestnetUrl = process.env.BSC_TESTNET_URL || "";

const config: HardhatUserConfig = {
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
};

export default config;
