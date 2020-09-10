// solium-disable linebreak-style
pragma solidity >=0.4.24 <0.6.6;


//import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "zeppelin-solidity/contracts/token/ERC721/ERC721.sol";


contract TokenCreateAuction {
  ERC721 public nonFungibleContract;

  struct Auction {
    address seller;
    uint128 price;
  }

  mapping (uint256 => Auction) public tokenIdToAuction;

  function TokenAuction( address _nftAddress ) public {
    nonFungibleContract = ERC721(_nftAddress);
  }

  function createAuction( uint256 _tokenId, uint128 _price ) public {
    nonFungibleContract.takeOwnership(_tokenId);
    Auction memory _auction = Auction({
       seller: msg.sender,
       price: uint128(_price)
    });
    tokenIdToAuction[_tokenId] = _auction;
  }
}