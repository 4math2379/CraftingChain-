

var Harvest = artifacts.require("Harvest");

module.exports = function(deployer) {
  deployer.deploy(Harvest)

    // Option 2) Console log the address:
    .then(() => console.log(Harvest.address))

    // Option 3) Retrieve the contract instance and get the address from that:
    .then(() => Harvest.deployed())
    .then(_instance => console.log(_instance.address));
};