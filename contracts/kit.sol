
pragma solidity >=0.4.21 <0.6.0;
import "./Owners.sol";
import "./Sample.sol";
import "./ResourceRefined.sol";



contract KittyCore is Sample {

    
    address public newContractAddress;

    function getResourcesStats(uint256 _id)
        external
        view
        returns (
        bool isRefiningInProcess,
        bool isReady,
        uint256 cooldownTime,
        //uint256 nextActionAt,
        uint256 extractionTime,
        uint256 extractionId,
        uint256 magnetiteId,
        uint256 hematiteId,
        uint256 class,
        uint256 sediments
    ) 
    
    
    {
        
        Resource storage stats = resources[_id];
        isRefiningInProcess = (stats.quality != 0);
        isReady = (stats.cooldownTime <= block.number);
        cooldownTime = uint256(stats.cooldownTime);
        extractionTime = uint256(stats.extractionTime);
        extractionId = uint256(stats.extractionId);
        magnetiteId = uint256(stats.magnetiteId);
        hematiteId = uint256(stats.hematiteId);
        class = uint256(stats.class);
        sediments = stats.sediments;
    }

}