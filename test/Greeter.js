const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
  
describe("Greeter", function () {

    async function deploy() {
        const [owner, attacker] = await ethers.getSigners();

        const Greeter = await ethers.getContractFactory("Greeter", owner);
        const greeter = await Greeter.deploy();

        return { owner, attacker, greeter };
    }

    it("Should be deployed", async function() {
        const { greeter } = await loadFixture(deploy);
        
        expect(greeter.target).to.be.properAddress
      })

    it("Empty greet after deploy", async function() {
        const { greeter } = await loadFixture(deploy);

        const greet = await greeter.getGreet();
        expect(greet).to.eq("");
    })

    it("Set greet",async function () {
        const { greeter } = await loadFixture(deploy);

        const msg = "Hello, world!";
        const tx = await greeter.setGreet(msg);
        await tx.wait();

        const greet = await greeter.getGreet();
        expect(greet).to.eq(msg);
    })

    it("Revert set greet for non-owner",async function () {
        const { greeter, attacker } = await loadFixture(deploy);
        const msg = "Hello, world!";
        
        await expect(
            greeter.connect(attacker).setGreet(msg)
            ).to.be.revertedWith("You are not an owner!");
        
    })
});
