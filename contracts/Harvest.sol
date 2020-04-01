// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;




contract Harvest {

//address of the user during the instance
address[16] public harvesters;
mapping (address => uint) public balances;

event Sent(address from, address to, uint amount);



//identify the resources
function harvest(uint ressourceId) public returns (uint) {
    require(ressourceId >= 0 && ressourceId <= 15);



    harvesters[ressourceId] = msg.sender;

    return ressourceId;

    



    

}






//getHarvester function in order to update all ressources status and place it inside the metamask wallet provider.

function getHarvesters() public view returns (address[16] memory) {
    return harvesters;

    }

}


//add ERC 721 to contract
contract Sample is Harvest {
/// @dev here it is all the Token ERC 721 spec


    function send(address receiver, uint amount) public {
        require(amount <= balances[msg.sender], "Insufficient balance.");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }


    struct ResourcesStats {
    uint quality;
    uint coldResistance;
    uint shockResistance;
    string name;
}
ResourcesStats[] public resourceStats;
}




