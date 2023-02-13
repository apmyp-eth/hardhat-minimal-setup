const hre = require("hardhat");
const ethers = hre.ethers;
const GreeterArtifact=require('../artifacts/contracts/Greeter.sol/Greeter.json');

async function main() {
    const greeterAddr='0x...'; // TODO: replace with your own address!
    const [signer] = await ethers.getSigners();
    const greeterContract=new ethers.Contract(greeterAddr,GreeterArtifact.abi,signer);

    const setGreetResult=await greeterContract.setGreet("Hello from newbie!")
    console.log(setGreetResult)
    await setGreetResult.wait()

    const result=await greeterContract.getGreet()
    console.log(result);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
