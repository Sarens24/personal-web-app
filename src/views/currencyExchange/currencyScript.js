const axios = require("axios");
require('dotenv').config()

//get all available currencies
async function getCurrencies() {
    const request = {
        method: 'GET',
        url: `https://v6.exchangerate-api.com/v6/${process.env.VUE_APP_API_KEY}/latest/USD`,
        // params: {apikey: process.env.VUE_APP_API_KEY}
        // headers: {
        //     'apikey': process.env.VUE_APP_API_KEY,
        // }
    };

    try {
        let response = await axios.request(request)
        return response.data
    } catch(error) {
        console.error(error);
    };
}

//get exchange rate between two currencies
async function getRate(toCurrency, fromCurrency) {
    const request = {
        method: 'GET',
        url: `https://v6.exchangerate-api.com/v6/${process.env.VUE_APP_API_KEY}/pair/${fromCurrency}/${toCurrency}`,
        // params: {base_currency: fromCurrency , currencies: toCurrency},
        // headers: {
        //     'apikey': process.env.VUE_APP_API_KEY,
        // }
    }

    try {
        let response = await axios.request(request)
        return response.data
    } catch(error) {
        console.error(error);
    };
}

//getCurrencies()

export { getRate, getCurrencies };