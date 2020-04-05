// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;

import "./ResourceRefined.sol";


contract  ResourceHelper is ResourceRefined {
    //cost ether for rarityUp fee
uint rarityForFee = 0.001 ether;

    //modify rarity !=not LEVEL
    modifier aboveCostLevel (uint _rarity ,uint _resourceId){
        require(resources[_resourceId].rarity >= _rarity);
        _;
    }


    //function to withdraw FIX ISSUE
    /*function withdraw() external onlyOwner {
        owner.transfer(this).balance;
    }*/

    //rarityfee for resources improvements
    function setRarityFee(uint _fee) external onlyOwner {
        rarityForFee = _fee;
    }

    //Rarity improvement function
    /// @dev this function is set by using RefinedResource.sol contract in order to gain better resources

    function rarityUp(uint _resourceId) external payable {
        require(msg.value == rarityForFee);
        resources[_resourceId].rarity++;
        }

        //change the name of resources

    function changeName(uint _resourceId, string calldata   _Newname) external aboveCostLevel(2, _resourceId) onlyOwnerOf (_resourceId){
        resources[_resourceId].name = _Newname;
        
    }

    //change the qualityUnits
    function changeQualityUnits(uint _resourceId, uint _newQualityUnits) external aboveCostLevel(2, _resourceId) onlyOwnerOf (_resourceId) {
                resources[_resourceId].qualityUnits = _newQualityUnits;

    }

    //grabe the resources ! array of it.

    function getTheResourceToOwner( address _owner) external view returns (uint[] memory) {
        uint[] memory result = new uint[](ownerResourceGain[_owner]);
        uint counter = 0;

        //loop
        for (uint i = 0; i < resources.length; i++) {
            if (resourceToOwner[i] == _owner){
                result[counter] = i;
                counter++;
            }

            
        }
        return result;

    }





}