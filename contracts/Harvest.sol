// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;


import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/math/SafeMath.sol";

import "./ResourceUp.sol";






contract Harvest is  ResourceUp, ERC721 {

    using SafeMath for uint256;

mapping (uint => address) resourceApproval;

function balanceOf(address _owner) public view returns (uint256 _balance) {
    return ownerResourceGain[_owner];
}

function ownerOf(uint256 _tokenId) public view returns (address _owner) {
    return resourceToOwner[_tokenId];
}

function _transfer(address _from, address _to, uint256 _tokenId) private {
    ownerResourceGain[_to] = ownerResourceGain[_to].add(1);
    ownerResourceGain[msg.sender] = ownerResourceGain[msg.sender].sub(1);
    resourceToOwner[_tokenId] = _to;
    emit Transfer(_from, _to, _tokenId);
}

function transfer(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
    transfer(msg.sender, _to, _tokenId);
    
}

function approve(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
    resourceApproval[_tokenId] = _to;
    emit Approval(msg.sender, _to, _tokenId);
}

function harvest(uint256 _tokenId) public {
    require(resourceApproval[_tokenId] == msg.sender);
    address owner = ownerOf(_tokenId);
    _transfer(owner, msg.sender, _tokenId);
}



}


//add ERC 721 to contract





