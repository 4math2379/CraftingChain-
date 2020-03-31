// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Harvest.sol";

contract TestHarvest {
    Harvest harvest = Harvest(DeployedAddresses.Harvest());

    uint expectedRessourceiD = 8;
    function testUserCanHarvest() public {
        uint returnedId = harvest.harvester(8);

        Assert.equal(returnedId, expectedRessourceiD, " Harvesting id .");
    }

    function testGetSampleByResourceId() public {
  // expectedRessourceiD owner is this contract
        address expectedRessourceiD = this;

        address harvester = harvest.harvester(8);

        Assert.equal(harvester, expectedRessourceiD, " Harvester of resources ID 8 should be recorded.");
    }
    // Testing retrieval of all sampler
    function testGetHarvesterAddressByResourcesIdInArray() public {
  // expectedRessourceiD owner is this contract
        address expectedHarvester = this;

  // Store harvester in memory rather than contract's storage
        address[16] memory harvester = harvest.getHarvester();

        Assert.equal(harvester[8], expectedHarvester, "Owner of pet ID 8 should be recorded.");
    }

}