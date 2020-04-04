// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;


import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Full.sol";




contract Harvest {

//address of the user during the instance
address[16] public harvesters;
mapping (address => uint) public balances;
mapping(address => mapping(address => uint256)) public allowance;



//identify the resources
function harvest(uint ressourceId) public returns (uint) {
    require(ressourceId >= 0 && ressourceId <= 15);



    harvesters[ressourceId] = msg.sender;

    return ressourceId;

    



    

}






//getHarvester function in order to update all ressources status and place it inside the metamask wallet provider.

function getHarvesters() public view returns (address[16] memory) {
    return harvesters;

    }

}


//add ERC 721 to contract





