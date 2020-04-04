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
  //App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
  App.web3Provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/583c67d6aae34e3794a8b5fd9009dc93');
}
web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Harvest.json', "Sample.json", function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var HarvestArtifact = data;
      App.contracts.Harvest = TruffleContract(HarvestArtifact);
      App.contracts.Sample
    
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





  markAdopted: function(harvesters, account) {
    var adoptionInstance;

    App.contracts.Harvest.deployed().then(function(instance) {
      adoptionInstance = instance;
    
      return adoptionInstance.getHarvesters.call();
    }).then(function(harvesters) {
      for (i = 0; i < harvesters.length; i++) {
        if (harvesters[i] !== '0x0000000000000000000000000000000000000000') {
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

web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

  var account = accounts[0];

  App.contracts.Harvest.deployed().then(function(instance) {
    adoptionInstance = instance;

    return adoptionInstance.harvest(petId, {from: account});
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