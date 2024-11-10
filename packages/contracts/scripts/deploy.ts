import hre from "hardhat";
import process from "process";

async function deploy() {
  const orchestratorFactory = await hre.ethers.getContractFactory(
    "Orchestrator",
  );
  const orchestrator = await orchestratorFactory.deploy();

  await orchestrator.waitForDeployment();

  console.log("Orchestrator deployed to:", await orchestrator.getAddress());
}

deploy().catch((err) => {
  console.error(err);
  process.exit(1);
});
