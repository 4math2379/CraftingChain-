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


    //
    ERC721 public nonFungibleContract;


    // Cut owner takes on each harvesting, measured in basis points (1/100 of a percent).
    // Values 0-10,000 map to 0%-100%
    uint256 public ownerCut;


    // map token id
    mapping (uint256 => Ressource) tokenIdOfRessource;

    event RessourceCreated(uint256 tokenId, uint256 overallQuality, uint256 rarity);
    event RessourceHarvestedSucess(uint256 tokenId, uint256 conductivity, uint256 crackingDate, address harvester );
    event RessourceHarvestedFail(uint256 tokenId);

   function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
        return (nonFungibleContract.ownerOf(_tokenId) == _claimant);
    }


     /// @dev Escrows the NFT, assigning ownership to this contract.
    /// Throws if the escrow fails.
    /// @param _owner - Current owner address of token to escrow.
    /// @param _tokenId - ID of token whose approval to verify.
    function _escrow(address _owner, uint256 _tokenId) internal {
        // it will throw if transfer fails
        nonFungibleContract.transferFrom(_owner, address(this), _tokenId);
    }

    /// @dev Transfers an NFT owned by this contract to another address.
    /// Returns true if the transfer succeeds.
    /// @param _receiver - Address to transfer NFT to.
    /// @param _tokenId - ID of token to transfer.
    function _transfer(address _receiver, uint256 _tokenId) internal {
        // it will throw if transfer fails
        nonFungibleContract.transfer(_receiver, _tokenId);
    }

    ///  RessourceCreated event.
    /// @param _tokenId The ID of the token to be put on ressource.
    /// @param _ressource Auction to add.
    function _addRessource(uint256 _tokenId, Ressource memory _ressource) internal {
        require(_ressource.crackingDate >= 1 minutes);

        tokenIdOfRessource[_tokenId] = _ressource;

        emit RessourceCreated(
            uint256(_tokenId),
            uint256(_ressource.rarity),
            uint256(_ressource.overallQuality)
        );
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





    ///@dev finish the generic stats ressourde from JS files.

}





