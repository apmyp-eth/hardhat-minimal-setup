/**
 * Run: hh setGreet --contract 0x.. --greeting "Hello" --network localhost
 */
task("setGreet", "Sets new greeting")
  .addParam("contract" , "Contract address")
  .addParam("greeting" , "New greeting")
  .setAction(async (taskArgs) => {
    const abi = require("../artifacts/contracts/Greeter.sol/Greeter.json").abi;

    const [signer] = await ethers.getSigners();
    let greeter = new ethers.Contract(taskArgs.contract, abi, signer);

    await greeter.setGreet(taskArgs.greeting);
  }
);

task("getGreet", "Gets current greeting")
  .addParam("contract" , "Contract address")
  .setAction(async (taskArgs) => {
    const abi = require("../artifacts/contracts/Greeter.sol/Greeter.json").abi;

    const [signer] = await ethers.getSigners();
    let greeter = new ethers.Contract(taskArgs.contract, abi, signer);

    let res = await greeter.getGreet();
    console.log(res);
  }
);
