// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;


import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Metadata.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol";
import "../node_modules/@openzeppelin/contracts/ownership/Ownable.sol";

import "../node_modules/@openzeppelin/contracts/drafts/Counters.sol";
import "./Harvest.sol";
import "./TradeableERC721Token.sol";





contract Sample is TradeableERC721Token {
/// @dev here it is all the Token ERC 721 spec
constructor(address _harvesters) TradeableERC721Token("ResourceChainToken", "RCT", _harvesters) public {  }

    function baseTokenURI() public view returns (string memory) {
    return "https://gateway.pinata.cloud/ipfs/QmNRwcGqqVWqHdF9VqNUy9AVRdBC5XDcu1v29FoGbm68fB";
    }

}