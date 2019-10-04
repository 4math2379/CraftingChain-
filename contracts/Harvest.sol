// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;




contract Harvest {
    /// @title Harvest is the main contract, harvesting ressource on the chain.
    /// @dev harvesting ressource on the chain
    /// @author Rahma Sinien rahma@blockchain101.fr (https://www.blockchain101.fr)
address public harvester;
address public crafter;
address public adventurer;

    /// @dev access modifier of both accounts.

     modifier onlyHarvester()  {
        require(msg.sender == harvester);
        _;
    }
    modifier onlyCrafter() {
        require(msg.sender == crafter);
        _;
    }
    modifier onlyAdventurer() {
        require(msg.sender == adventurer);
        _;
    }

    bool public paused = false;

    mapping (address=>address)  harvestersToContract;


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
event CrakedRessources(address harvester, uint256 n, uint256 locationId);


    /// @dev Transfer event as defined in current draft of ERC721. Emitted every time a kitten
event Transfer(address from, address to, uint256 tokenId );




///@dev this is the struct of each resources 256 bit words unpack it.
    struct Ressource {
        uint overallQuality;
        uint crackingDate;
        uint conductivity;
        uint rarity;
    }
    Ressource[] ressourceStats;


    /// @dev create another struc for the location id.

    struct Location {
        uint256 forest;
        uint64 underground;
        uint32 sea;
        uint16 moutains;
    }

    Location[] locations;



    ///@dev function of both id.
     function getRessourceId(uint n) public view returns (uint, uint) {

     
     return (ressourceStats[n].crackingDate, 
             ressourceStats[n].rarity,
             ressourceStats[n].overallQuality,
             ressourceStats[n].conductivity);

    }



    


    function getLocation(uint locationId) public returns (uint, uint) {
        require(locationId >= 0 && locationId <= 15);

        harvester[locationId] = msg.sender;

        return (locations[locationId]);
    }

    ///@dev finish the generic stats ressourde from JS files.

}





