// solium-disable linebreak-style
pragma solidity ^0.5.0;

contract Harvest {

    address[16] public harvester;

    function sample(uint resourceId) public returns (uint) {
        require(resourceId >= 0 && resourceId <= 15);

        harvester[resourceId] = msg.sender;

        return resourceId;
    }





//rajout en sol 0.5 de la mémoire Explicit data location for all variables of struct, 
//array or mapping types is now mandatory. This is also applied to function
// parameters and return variables.


    function getHarvester() public view returns (address  [16] memory) {
        return harvester;

    }
}