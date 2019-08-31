// solium-disable linebreak-style
pragma solidity >=0.4.21 <0.6.0;

contract Harvest {

    address[16] public harvester;

    function sample(uint resourceId) public returns (uint) {
        require(resourceId >= 0 && resourceId <= 15);

        harvester[resourceId] = msg.sender;

        return resourceId;
    }





//rajout en sol 0.5 de la mémoire Explicit data location for all variables of struct, 
//array or mapping types is now mandatory. This is also applied to function
// parameters and return variables.


    function getHarvester() public view returns (address[16] memory) {
        return harvester;

    }

    function splitSignature(bytes memory sig)
        internal
        pure
        returns (uint8 v, bytes32 r, bytes32 s)
    {
        require(sig.length == 65);

        assembly {
            // first 32 bytes, after the length prefix.
            r := mload(add(sig, 32))
            // second 32 bytes.
            s := mload(add(sig, 64))
            // final byte (first byte of the next 32 bytes).
            v := byte(0, mload(add(sig, 96)))
        }

        return (v, r, s);
    }

    function recoverSigner(bytes32 message, bytes memory sig)
        internal
        pure
        returns (address)
    {
        (uint8 v, bytes32 r, bytes32 s) = splitSignature(sig);

        return ecrecover(message, v, r, s);
    }

    /// builds a prefixed hash to mimic the behavior of eth_sign.
    function prefixed(bytes32 hash) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));
    }
}