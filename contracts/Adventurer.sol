// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;

//import open Zep for ERC721

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Mintable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/ownership/Ownable.sol";

contract Adventurer {
    /// @title Adventurer contrat who need to store address who are items.
    /// @dev trade ressource versus items (address from harster/crafters).
    address internal ressourceChain;
    string public constant name = "RessourChainToken";
    string public  constant symbol = "RCT";
}