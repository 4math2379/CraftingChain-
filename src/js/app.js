const { default: Web3 } = require('web3');
App = {
  

  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load resources.
    $.getJSON('../resources.json', function(data) {

      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].name);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.resource-rarity').text(data[i].rarity);
        petTemplate.find('.pet-age').text(data[i].rarity);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    return await App.initWeb3();
  },


  initWeb3: async function() {
    // Modern dapp browsers...
if (window.ethereum) {
  App.web3Provider = window.ethereum;
  try {
    // Request account access
    await window.ethereum.enable();
  } catch (error) {
    // User denied account access...
    console.error("User denied account access")
  }
}
// Legacy dapp browsers...
else if (window.web3) {
  App.web3Provider = window.web3.currentProvider;
}
// If no injected web3 instance is detected, fall back to Ganache
else {
  //App.web3Provider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
  App.web3Provider = new Web3.providers.HttpProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY );
}
  //web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Harvest.json', "Sample.json", function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var HarvestArtifact = data;
      App.contracts.Harvest = TruffleContract(HarvestArtifact);
      //App.contracts.Sample
      
    
      // Set the provider for our contract
      App.contracts.Harvest.setProvider(App.web3Provider);
    
      return App.markAdopted();
      
      //return the markedBuyResource and catch it
    });

    return App.bindEvents();
  },




  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  //init sample contract with awardItem function
  //return in a func and catch it 

  



  markAdopted: function(balanceOf, account) {
    var adoptionInstance;

    App.contracts.Harvest.deployed().then(function(instance) {
      adoptionInstance = instance;
    
      return adoptionInstance.balanceOf.call();
    }).then(function(harvest) {
      for (i = 0; i < harvest.length; i++) {
        if (harvest[i] !== '0x0000000000000000000000000000000000000000') {
          $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
        } 
      }
    }).catch(function(err) {
      console.log(err.message);
    });
  },




  //fire a markedResourceBuy from Sample contract
  //deployed then function , return and catch it

  handleAdopt: function(event) {


    



    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    


    var adoptionInstance;
    var contract_address;


web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

  
  var account = web3.eth.accounts[0];

  var accountInterval = setInterval(function() {
    if (web3.eth.accounts[0] !== account) {
      account = web3.eth.accounts[0];
      updateInterface();
    }
  }, 100);


  App.contracts.Harvest.deployed().then(function(instance) {

    
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      
      
    
      // Set the provider for our contract
      App.contracts.Harvest.setProvider(App.web3Provider);
    
      
      //return the markedBuyResource and catch it
    
    var Eth = require('web3');


    const abi = [{"constant":true,
    "inputs":[{"name":"","type":"address"}],
    "name":"balances",
    "outputs":[{"name":"","type":"uint256"}],
    "payable":false,
    "stateMutability":"view",
    "type":"function"},
    
    {
        "constant":true,"inputs":[],
    "name":"getHarvesters",
    "outputs":[{"name":"","type":"address[16]"}],
    "payable":false,
    "stateMutability":"view",
    "type":"function"},
    
    {
        
        "constant":false,
        "inputs":[{"name":"ressourceId","type":"uint256"}],
        "name":"harvest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"harvesters","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Sent","type":"event"}]
    
     
    

    var eth = new Eth(Eth.givenProvider || 'HTTP://127.0.0.1:7545');

    var contractAbi = abi;
    
    var harvestContract = Web3.eth.contract(contractAbi).at(contract_address);
    var getData = harvestContract.balanceOf.getData(address);
    


    
    adoptionInstance = instance;
    contract_address = '0x81D9a0Ccaa9a867bbC7c687bDf8A0C53a063B81e';
    //sending transaction function to build.
    web3.eth.sendTransaction({from: contract_address,to:accounts, data: getData });


    return adoptionInstance.harvest(petId, {gas : 21000,from: account});
  }).then(function(result) {
    return App.markAdopted();
  }).catch(function(err) {
    console.log(err.message);
  });
});
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});