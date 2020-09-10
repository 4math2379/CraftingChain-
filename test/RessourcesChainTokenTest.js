
import assertRevert from "zeppelin-solidity/test/helpers/assertRevert";


const RessourcesChainToken = artifacts.require("RessourcesChainToken");


contract("RessourcesChainToken", accounts => {
    it("Account owner got ressource => OK !", async () => {
      let instance = await RessourcesChainToken.deployed();
      let owner = await instance.owner();
      assert.equal(owner, accounts[0]);
    });



    describe("mint", () => {
      it("creates token with specified ressource quality", async () => {
        let instance = await RessourcesChainToken.deployed();
        let owner = await instance.owner();
    
        let token = await instance.mint("#ff00dd", "#ddddff");
    
        let tokens = await instance.tokensOf(owner);
        let ressources = await instance.getRessource(tokens[0]);
        assert.deepEqual(ressources, ["#ff00dd", "#ddddff"]);
      });


      it("allows to mint only to owner", async () => {
        let instance = await RessourcesChainToken.deployed();
        let other = accounts[0];
      
        await instance.transferOwnership(other);
        await assertRevert(instance.mint("#ff00dd", "#ddddff"));
      });
    });


  });