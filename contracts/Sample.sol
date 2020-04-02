// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;


import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/@openzeppelin/contracts/drafts/Counters.sol";
import "./Harvest.sol";





contract Sample is ERC721Full {
/// @dev here it is all the Token ERC 721 spec
Counters.Counter private _tokenIds;

constructor() ERC721Full(  "resourceChainToken", "RCT") public  {

    }

    function awardItem(address harvesters, string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(harvesters, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

}