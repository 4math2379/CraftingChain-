// solium-disable linebreak-style
pragma solidity >=0.4.24 <0.6.6;


import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/ownership/Ownable.sol";

//import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
//import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

contract RessourcesChainToken is ERC721 , Ownable {
  string public constant name = "RessourcesChainToken";
  string public constant symbol = "RCT";




  ///@dev structure of the RCT only ressources for trade
  struct Ressources {
    string good;
    string average;


  }
  Ressources[] public ressources;



  function getRessource( uint _ressourceId ) public view returns(string memory good, string memory  average){
  Ressources memory _ress = ressources[_ressourceId];

  good = _ress.good;
  average = _ress.average;
}



  function mint (string memory _good, string memory  _average) public  onlyOwner {

    Ressources memory _ressources = Ressources({ good: _good, average: _average });
  uint _ressourcesId = ressources.push(_ressources) - 1;

  _mint(msg.sender, _ressourcesId);

  }



  

}













