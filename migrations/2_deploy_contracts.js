

const Harvest = artifacts.require("Harvest");
//const TradeableERC721Token =  artifacts.require("TradeableERC721Token");
const Strings = artifacts.require("Strings");
const Sample = artifacts.require("Sample");
const ResourceRefined = artifacts.require("ResourceRefined");
const Owners = artifacts.require("Ownable");
const ResourceHelper = artifacts.require("ResourceHelper");
const kit = artifacts.require("KittyCore");


module.exports =  function(deployer) {
  deployer.deploy(Harvest)
  
  
};






  