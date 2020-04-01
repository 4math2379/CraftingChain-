// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;




contract Harvest {
address[16] public harvesters;


function harvest(uint ressourceId) public returns (uint) {
    require(ressourceId >= 0 && ressourceId <= 15);

    harvesters[ressourceId] = msg.sender;

    return ressourceId;
}



//getHarvester function in order to update all ressources status

function getHarvesters() public view returns (address[16] memory) {
    return harvesters;

    }
}




