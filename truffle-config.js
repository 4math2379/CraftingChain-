
var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "parent crazy slot apple payment decline zebra demise stock census slow thrive"

module.exports = {


  


   networks: {
    /*development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },*/
     ropsten: {
       provider: function() {
         return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/583c67d6aae34e3794a8b5fd9009dc93")
       },
       network_id: '3',
       gas: 4000000,
       gasPrice: 21
     }   
   }

};
