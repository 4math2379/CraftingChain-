App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    // Load resources.
    $.getJSON('../resources.json', function(data) {
      var resourcesRow = $('#resourcesRow');
      var resourcesTemplate = $('#resourcesTemplate');

      for (i = 0; i < data.length; i ++) {
        resourcesTemplate.find('.panel-title').text(data[i].name);
        resourcesTemplate.find('img').attr('src', data[i].picture);
        resourcesTemplate.find('.resource-rarity').text(data[i].rarity);
        resourcesTemplate.find('.resource-location').text(data[i].location);
        resourcesTemplate.find('.btn-sample').attr('data-id', data[i].id);

        resourcesRow.append(resourcesTemplate.html());
      }
    });

    return App.initWeb3();
  },

  initWeb3: function() {
    //update modern dapps 
    if (window.ethereum) {
    
    App.web3Provider = window.ethereum;
    try {
      await.window.ethereum.enable();

    } catch (error) {
      console.log("error account denied by user")
      } 

    }




    else if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {

      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Harvest.json', function(data) {

      var HarvestArtifact = data;
      App.contracts.Harvest = TruffleContract(HarvestArtifact);
    
      App.contracts.Harvest.setProvider(App.web3Provider);
    
      return App.markSampled();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-sample', App.handleSample);
  },

  markSampled: function( harvester , account) {
    var harvestInstance;

App.contracts.Harvest.deployed().then(function(instance) {
  harvestInstance = instance;

  return harvestInstance.getHarvester.call();
}).then(function(harvester) {
  for (i = 0; i < harvester.length; i++) {
    if (harvester[i] !== '0x0000000000000000000000000000000000000000') {
      $('.panel-resource').eq(i).find('button').text('Success').attr('disabled', true);
    }
  }
}).catch(function(err) {
  console.log(err.message);
});
  },

  handleSample: function(event) {
    event.preventDefault();

    var resourceId = parseInt($(event.target).data('id'));

    var harvestInstance;

web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

  var account = accounts[0];

  App.contracts.Harvest.deployed().then(function(instance) {
    harvestInstance = instance;

    return harvestInstance.sample(resourceId, {from: account});
  }).then(function(result) {
    return App.markSampled();
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
