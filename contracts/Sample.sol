// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;

import "./Owners.sol";





contract Sample is Ownable  {
/// @dev here it is all the Token ERC 721 spec by an event
event NewResource (uint resourceId, string name , uint quality);

uint qualityUnits = 16;
uint qualityModulo = qualityUnits;
uint cooldownTime = 1 days;




struct Resource {
    string name;
    uint quality;
    uint32 rarity;
    uint32 readyTime;
    uint16 stockGain;
    uint16 stockLoss;

    }



//mapping address and apply stocks
    mapping (uint => address) public resourceToOwner;
    mapping (address => uint) ownerResourceGain;
    Resource[] public resources;


/// @dev function to crack the resource stacks
function _createResource (string memory _name , uint _quality) internal {
    uint id = resources.push(Resource(_name,_quality ,1 , uint32( now + cooldownTime), 0 , 0) )+1;
    resourceToOwner[id] = msg.sender;
    ownerResourceGain[msg.sender]++;
    emit NewResource(id, _name , _quality);
    }

    //function to generate rand stats for resources
    function _generateRandomQuality(string memory _str ) private view returns (uint) {
        uint rand = uint(keccak256(abi.encode(_str)));
        return rand % qualityModulo;
    }

    //function to generate the resource stacks

    function createResourceStack(string memory _name) public {
    require(ownerResourceGain[msg.sender] ==0);
    uint randomQuality = _generateRandomQuality(_name);
    randomQuality = randomQuality - randomQuality % 100;
    _createResource(_name, randomQuality);
        



        
    }


}