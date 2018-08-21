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
    /*
     * Replace me...
     */

    return App.initContract();
  },

  initContract: function() {
    /*
     * Replace me...
     */

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-sample', App.handlesample);
  },

  markSampled: function(harvester, account) {
    /*
     * Replace me...
     */
  },

  handleSample: function(event) {
    event.preventDefault();

    var resourceId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
