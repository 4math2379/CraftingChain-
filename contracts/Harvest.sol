// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;

contract Harvest {

    address[16] public harvester;

    function sample(uint resourceId) public returns (uint) {
        require(resourceId >= 0 && resourceId <= 15);

        harvester[resourceId] = msg.sender;

        return resourceId;
    }
    function getHarvester() public view returns (address[16] memory) {
        return harvester;

    }

}