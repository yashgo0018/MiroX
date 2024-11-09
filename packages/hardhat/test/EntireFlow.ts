import { expect } from "chai";
import { ethers } from "hardhat";
import { Orchestrator } from "../typechain-types";
import { Signer } from "ethers";

describe("Entire Flow", function () {
  // We define a fixture to reuse the same setup in every test.

  // Define the Uniswap V3 Router and some ERC20 token addresses on mainnet
  const UNISWAP_V3_ROUTER_ADDRESS = "0xE592427A0AEce92De3Edee1F18E0157C05861564"; // Uniswap V3 Router address
  const TOKEN_IN_ADDRESS = "0xA0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"; // USDC (for example)
  const TOKEN_OUT_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // WETH (for example)
  const FEE = 3000; // 0.3% Uniswap V3 pool fee

  let orchestrator: Orchestrator;
  const accounts: string[] = [];
  let signers: Signer[];
  before(async () => {
    signers = await ethers.getSigners();
    for (const signer of signers) {
      accounts.push(await signer.getAddress());
    }
    const orchestratorFactory = await ethers.getContractFactory("Orchestrator");
    orchestrator = (await orchestratorFactory.deploy(UNISWAP_V3_ROUTER_ADDRESS)) as Orchestrator;
    await orchestrator.waitForDeployment();
  });

  it("Should register a investor and a manager", async () => {
    await orchestrator.connect(signers[0]).register("investor-1");
    await orchestrator.connect(signers[1]).register("manager-1");
  });

  it("Should create a AMC Request", async () => {
    const tx = await orchestrator.connect(signers[0]).createRequest("manager-1", 1000, "{}");
    console.log("tx", tx);
    const receipt = await tx.wait();
    console.log("receipt", receipt);
  });

  it("Should not be able to deposit money in the AMC Request as it is not approved", async () => {});

  // describe("Deployment", function () {
  //   it("Should have the right message on deploy", async function () {
  //     expect(await yourContract.greeting()).to.equal("Building Unstoppable Apps!!!");
  //   });

  //   it("Should allow setting a new message", async function () {
  //     const newGreeting = "Learn Scaffold-ETH 2! :)";

  //     await yourContract.setGreeting(newGreeting);
  //     expect(await yourContract.greeting()).to.equal(newGreeting);
  //   });
  // });
});
