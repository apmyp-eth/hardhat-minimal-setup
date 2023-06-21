const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {

  if(hre.network.name=="hardhat") {
    console.warn("You are trying to deploy a contract to the Hardhat Network which " +
                 "gets automatically created and destroyed every time. "+
                 "Use the Hardhat option '--network localhost'");
  }

  const greeter = await hre.ethers.deployContract("Greeter");

  await greeter.waitForDeployment();

  console.log(`Deployed to ${greeter.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
