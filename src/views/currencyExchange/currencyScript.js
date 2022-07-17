const axios = require("axios");
require('dotenv').config()

//get all available currencies
async function getCurrencies() {
    const request = {
        method: 'GET',
        url: 'https://api.currencyapi.com/v3/currencies',
        // params: {apikey: process.env.VUE_APP_API_KEY}
        headers: {
            'apikey': process.env.VUE_APP_API_KEY,
        }
    };

    try {
        let response = await axios.request(request)
        return response.data.data
    } catch(error) {
        console.error(error);
    };
}

//get exchange rate between two currencies
async function getRate(toCurrency, fromCurrency) {
    const request = {
        method: 'GET',
        url: 'https://api.currencyapi.com/v3/latest',
        params: {base_currency: fromCurrency , currencies: toCurrency},
        headers: {
            'apikey': process.env.VUE_APP_API_KEY,
        }
    }

    try {
        let response = await axios.request(request)
        return response.data.data
    } catch(error) {
        console.error(error);
    };
}

//getCurrencies()

export { getRate, getCurrencies };