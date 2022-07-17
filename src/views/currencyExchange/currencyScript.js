const axios = require("axios");
require('dotenv').config()

async function getCurrencies() {
    const request = {
        method: 'GET',
        url: 'https://api.currencyapi.com/v3/currencies',
        params: {apikey: process.env.VUE_APP_API_KEY}
        // headers: {
        //     'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
        //     'X-RapidAPI-Host': 'currency-converter13.p.rapidapi.com'
        // }
    };

    try {
        let response = await axios.request(request)
        return response.data.data
    } catch(error) {
        console.error(error);
    };
}

async function getRate(toCurrency, fromCurrency) {
    const request = {
        method: 'GET',
        url: 'https://api.currencyapi.com/v3/latest',
        params: {apikey: process.env.VUE_APP_API_KEY, base_currency: fromCurrency , currencies: toCurrency},
        // headers: {
        //     'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
        // }
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