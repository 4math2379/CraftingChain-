// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Harvest.sol";

contract TestHarvest {
    Harvest harvest = Harvest(DeployedAddresses.Harvest());

    uint expectedRessourceiD = 8;
    address expectedHarvester = address(this);



    function testUserCanHarvest() public {
        uint returnedId = harvest.harvest(expectedRessourceiD);

        Assert.equal(returnedId, expectedRessourceiD, " Harvesting id expected match .");
    }

    function testGetHarvesterAddressByRessourceId() public {
        address harvesters =harvest.harvesters(expectedRessourceiD);

        Assert.equal(harvesters, expectedHarvester," Owner of the expected ressources");
    }


    function testGetHarvesterAddressByRessourceIdInArray() public {
  address[16] memory harvesters = harvest.getHarvesters();

  Assert.equal(harvesters[expectedRessourceiD], expectedHarvester, "Owner of the expected ressource should be this contract");
}


}