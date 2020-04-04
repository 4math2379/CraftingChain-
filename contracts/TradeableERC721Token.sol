// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;


import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import '../node_modules/@openzeppelin/contracts/ownership/Ownable.sol';
import './Strings.sol';
import "./Harvest.sol";

contract OwnableDelegateProxy { }

contract ProxyRegistry {
    mapping(address => OwnableDelegateProxy) public proxies;
}

/**
 * @title TradeableERC721Token
 * TradeableERC721Token - ERC721 contract that whitelists a trading address, and has minting functionality.
 */
contract TradeableERC721Token is ERC721Full, Ownable {
using Strings for string;

address harvesters;
uint256 private _currentTokenId = 0;

constructor(string memory _name, string memory _symbol, address _harvesters) ERC721Full(_name, _symbol) public {
        harvesters = _harvesters;
}

/**
    * @dev Mints a token to an address with a tokenURI.
    * @param _to address of the future owner of the token
    */
    function mintTo(address _to) public onlyOwner {
    uint256 newTokenId = _getNextTokenId();
    _mint(_to, newTokenId);
    _incrementTokenId();
    }

/**
    * @dev calculates the next token ID based on value of _currentTokenId
    * @return uint256 for the next token ID
    */
function _getNextTokenId() private view returns (uint256) {
    return _currentTokenId.add(1);
}

/**
    * @dev increments the value of _currentTokenId
    */
function _incrementTokenId() private  {
    _currentTokenId++;
}

function baseTokenURI() public view returns (string memory) {
    return "";
}

function tokenURI(uint256 _tokenId) external view returns (string memory) {
    this;
    return Strings.strConcat(
    baseTokenURI(),
    Strings.uint2str(_tokenId)
    );
}


function isApprovedForAll(
    address owner,
    address operator
)
    public
    view
    returns (bool)
{
    // Whitelist proxy contract for easy trading.
    ProxyRegistry proxyRegistry = ProxyRegistry(harvesters);
    if (address(proxyRegistry.proxies(owner)) == operator) {
        return true;
    }

    return super.isApprovedForAll(owner, operator);
}
}