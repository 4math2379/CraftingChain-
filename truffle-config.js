
const HDWalletProvider = require("truffle-hdwallet-provider");
require("babel-register")({
  ignore: /node_modules\/(?!zeppelin-solidity)/
});
require("babel-polyfill");

require('dotenv').config()



module.exports = {

  plugins: ["truffle-security"],





  


  networks: {
    plugins: [ "truffle-security" ],
    development: {
      host: "127.0.0.1",
      port: 7545,
      gas: 5000000,
      gasPrice: 6,
      network_id: "*" // Match any network id
    },
  ropsten: {
    provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY ),
      network_id: '3',
      from:"0x2Cd58C1FeedD4516c17290B1CFD101e89f031446",
      port:3000,
      gas: 4012388,
      gasPrice: 6
    },
    rinkby: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: '3',
      from: "0x2Cd58C1FeedD4516c17290B1CFD101e89f031446",
      port : 3000,
      gas : 4012388,
      gasPrice:6
    }   
  }

};
