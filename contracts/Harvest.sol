// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;




contract Harvest {
    /// @title Harvest is the main contract, harvesting ressource on the chain.
    /// @dev harvesting ressource on the chain
    /// @author Rahma Sinien rahma@blockchain101.fr (https://www.blockchain101.fr)

    /// address of the account and contract 
    address[16] public harvester;
    address[16] public crafter;
    address[16] public adventurer;

   
   
   
   ///@dev access modifier of both accounts 
    modifier onlyHarvester(){
        require(msg.sender == harvester);
    }

    modifier onlyCrafter() {
        require(msg.sender == crafter);
    }

    modifier onlyAdventurer() {
        require(msg.sender == adventurer);
    }

    bool public paused = false;




    ///@dev function of both id 

    function sample(uint resourceId) public returns (uint) {
        require(resourceId >= 0 && resourceId <= 15);

        harvester[resourceId] = msg.sender;

        return resourceId;
    }
    

    function location(uint locationId) public returns (uint) {
        require(locationId >= 0 && locationId <= 15);
        
        harvester[locationId] = msg.sender;

        return locationId;
        
    }


    function getHarvester() public view returns (address[16] memory) {
        return harvester;

    }

}






contract ERC721 {
    //methods
    function totalSupply() public view returns (uint256 total);
    function balanceOf(address _owner) public view returns (uint256 balance);
    function ownerOf(uint256 _tokenId) external view returns (address owner);
    function approve(address _to, uint256 _tokenId) external;
    function transfer(address _to, uint256 _tokenId) external;
    function transferFrom(address _from, address _to, uint256 _tokenId) external;

    // Events
    event Transfer(address from, address to, uint256 tokenId);
    event Approval(address owner, address approved, uint256 tokenId);

    // Optional
    // function name() public view returns (string name);
    // function symbol() public view returns (string symbol);
    // function tokensOfOwner(address _owner) external view returns (uint256[] tokenIds);
    // function tokenMetadata(uint256 _tokenId, string _preferredTransport) public view returns (string infoUrl);

    // ERC-165 Compatibility (https://github.com/ethereum/EIPs/issues/165)
    function supportsInterface(bytes4 _interfaceID) external view returns (bool);
}


contract Ressources is Harvest {
/// @title contract for the ressources stats.
/// @author Sinien Rahma blockchain101 , rahma@blockchain101.fr , (https://www.blockchain101.fr)


/// @dev event for craking the random ressources , the ownner , th type of ressources  and location.
event CrakedRessources(address harvester, uint256 resourceId, uint256 locationId);


    /// @dev Transfer event as defined in current draft of ERC721. Emitted every time a kitten
event Transfer(address from, address to, uint256 tokenId );




///@dev this is the struct of each resources 256 bit words.
    struct Ressource {
        uint256 overallQuality;
        uint64 expirationDate;
        uint32 conductivity;
        uint16 rarity;
    }

    ///@dev finish the generic stats ressourde from JS files.

}


