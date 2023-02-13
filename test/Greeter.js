const { ethers } = require("hardhat");
const { expect } = require("chai");
  
describe("Greeter", function () {
    let owner,attacker;
    let greeter;

    beforeEach(async function() {
        [owner, attacker] = await ethers.getSigners();

        const Greeter = await ethers.getContractFactory("Greeter", owner);
        greeter = await Greeter.deploy();
        await greeter.deployed();
    })

    it("Should be deployed", async function() {
        expect(greeter.address).to.be.properAddress
      })

    it("Empty greet after deploy", async function() {
        const greet = await greeter.getGreet();
        expect(greet).to.eq("");
    })

    it("Set greet",async function () {
        const msg = "Hello, world!";
        const tx = await greeter.setGreet(msg);
        await tx.wait();

        const greet = await greeter.getGreet();
        expect(greet).to.eq(msg);
    })

    it("Revert set greet for non-owner",async function () {
        const msg = "Hello, world!";
        
        await expect(
            greeter.connect(attacker).setGreet(msg)
            ).to.be.revertedWith("You are not an owner!");
        
    })
});