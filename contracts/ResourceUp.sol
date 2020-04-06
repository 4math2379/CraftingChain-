// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;

import "./ResourceHelper.sol";

contract ResourceUp is ResourceHelper {
uint randNonce = 0;
uint resourceUpProba = 70;


/*function randMod(uint _modulus) internal returns(uint) {
    randNonce++;
    return uint(keccak256( (abi.encodePacked(now, msg.sender,randNonce))) % uint(_modulus));
}*/

function setUp(uint _resourceId, uint _targetId) external onlyOwnerOf(_resourceId) {
    Resource storage myResource = resources[_resourceId];
    Resource storage anotherResource = resources[_targetId];
    uint rand = 100;
    if (rand <= resourceUpProba) {
    myResource.stockGain++;
    myResource.rarity++;
    anotherResource.stockLoss++;
    refinedAndMultiply(_resourceId, anotherResource.quality, "resource");
    } else {
    myResource.stockLoss++;
    anotherResource.stockGain++;
    triggerCooldown(myResource);
        }
    }
}
