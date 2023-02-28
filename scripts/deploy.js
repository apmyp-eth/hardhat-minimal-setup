const { network } = require("hardhat");
const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {

  if(network.name=="hardhat") {
    console.warn("You are trying to deploy a contract to the Hardhat Network which " +
                 "gets automatically created and destroyed every time. "+
                 "Use the Hardhat option '--network localhost'");
  }

  const [signer] = await ethers.getSigners();

  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy();

  await greeter.deployed();

  console.log(`Deployed to ${greeter.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
