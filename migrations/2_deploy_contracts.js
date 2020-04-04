

const Harvest = artifacts.require("Harvest");
const TradeableERC721Token =  artifacts.require("TradeableERC721Token");
const Strings = artifacts.require("Strings");
const Sample = artifacts.require("Sample")

module.exports =  function(deployer) {
  deployer.deploy(Harvest)
  
  
};

module.exports =  function(deployer) {
  deployer.deploy(Sample, Strings)
  
  
};

module.exports =  function(deployer) {
  deployer.deploy(TradeableERC721Token)
  
  
};



  