const axios = require("axios");
require('dotenv').config()

async function getCurrencies() {
    const request = {
        method: 'GET',
        url: 'https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies',
        headers: {
            'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
            'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
        }
    };

    try {
        let response = await axios.request(request)
        return response.data
    } catch(error) {
        console.error(error);
    };
}

async function getRate(toCurrency, fromCurrency) {
    const request = {
        method: 'GET',
        url: 'https://currency-converter18.p.rapidapi.com/api/v1/convert',
        params: {to: toCurrency , from: fromCurrency, amount: '1'},
        headers: {
            'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
            'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
        }
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