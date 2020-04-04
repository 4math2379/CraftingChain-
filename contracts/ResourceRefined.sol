// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;

import "./Sample.sol";
import "./kit.sol";




/// @title RefiningInterface for resource modification called refining
/// @dev Refining function inside for improving stats of resources.
contract RefiningInterface {
    function refining(uint256 _id) external view returns (
        bool isRefiningInProcess,
        bool isReady,
        uint256 cooldownTime,
        uint256 nextActionsAt,
        uint256 extractionTime,
        uint256 extractionId,
        uint256 magnetiteId,
        uint256 hematiteId,
        uint256 class,
        uint256 sediments
    );
}
contract ResourceRefined is Sample , KittyCore {
    Resourceinterface KittyContract = AnotherInterface(KittyCore);
    RefiningInterface AnotherInterface;

    modifier onlyOwnerOf(uint _resourceId) {
        require(msg.sender == resourceToOwner[_resourceID]);
        _;
    }


    function SetAnotherContractAddress (address _address) external onlyOwner {
        KittyContract = Resourceinterface(_address);
    }

    function triggerCooldown (Resource storage _resource ) internal {
        _resource.readyTime = uint32(now+cooldownTime);

    }

    function _isReady ( Resource storage _resource ) internal view returns (bool) {
    return (_resource.readyTime <= now);
    }


        function refinedAndMultiply( uint _resourceId, uint _targetQuality, string memory _types) internal onlyOwnerOf(_resourceId) {
        Resource storage myResource = resources[_resourceId];
        require(_isReady(myResource));
        _targetQuality % qualityModulo;
        uint newQuality = (myResource.quality + _targetQuality) / 2;
        if(keccak256(_types) == keccak256(abi.encode("Kitty"))) {
            newQuality = newQuality - newQuality % 100 + 99;
    }
    _createResource("NoName", newQuality);
    _triggerCooldown(myResource);
    }


    function refineOnInterface(uint _resourceId, uint _kittyId ) public {
    uint materialUsed;
    (,,,,,,,,,,materialUsed) = KittyContract.getKitty(_kittyId);
    refinedAndMultiply(_resourceId ,materialUsed,"Kitty");

    
    }





}




