const hre = require("hardhat");
const ethers = hre.ethers;
const GreeterArtifact=require('../artifacts/contracts/Greeter.sol/Greeter.json');

async function main() {
    const greeterAddr='0x..'; // TODO: replace with your own address!
    const greeter=await ethers.getContractAt(GreeterArtifact.abi,greeterAddr);

    const setGreetResult=await greeter.setGreet("Hello from newbie!")
    //console.log(setGreetResult)
    await setGreetResult.wait()

    const result=await greeter.getGreet()
    console.log(result);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
