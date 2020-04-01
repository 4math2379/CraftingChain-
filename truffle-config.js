
const HDWalletProvider = require("truffle-hdwallet-provider");


require('dotenv').config()


module.exports = {

  plugins: ["truffle-security"],



  


  networks: {
    plugins: [ "truffle-security" ],
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  ropsten: {
    provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY ),
      network_id: '3',
      host:"localhost",
      port:3000,
      gas: 8000000,
      gasPrice: 10000000000
    }   
  }

};
