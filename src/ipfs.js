const axios = require('axios');
require('dotenv').config()

export const userPinList = (pinataApiKey, pinataSecretApiKey) => {
    const url = `https://api.pinata.cloud/data/userPinnedDataTotal`;
    return axios
        .get(url, {
            headers: {
                'pinata_api_key': process.env.pinataApiKey,
                'pinata_secret_api_key': process.env.pinataSecretApiKey
            }
        })
        .then(function (response) {

            console.log("ok api connected")
            //handle response here
        })
        .catch(function (error) {
            console.log("Na api not connected")
            //handle error here
        });
}