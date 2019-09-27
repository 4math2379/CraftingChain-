// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;

import "node_modules/truffle/build/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Harvest.sol";

contract TestHarvest {
    Harvest harvest = Harvest(DeployedAddresses.Harvest());
    function testUserCanHarvest() public {
        uint returnedId = harvest.sample(8);

        uint expected = 8;

        Assert.equal(returnedId, expected, " Harvesting id .");
    }

    function testGetSampleByResourceId() public {
  // Expected owner is this contract
        address expected = this;

        address harvester = harvest.harvester(8);

        Assert.equal(harvester, expected, " Harvester of resources ID 8 should be recorded.");
    }
    // Testing retrieval of all sampler
    function testGetHarvesterAddressByResourcesIdInArray() public {
  // Expected owner is this contract
        address expected = this;

  // Store harvester in memory rather than contract's storage
        address[16] memory harvester = harvest.getHarvester();

        Assert.equal(harvester[8], expected, "Owner of pet ID 8 should be recorded.");
    }

}