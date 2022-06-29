const axios = require("axios");
require('dotenv').config()

async function getCurrencies() {
    const request = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/listquotes',
        headers: {
            'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
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
        url: 'https://currency-exchange.p.rapidapi.com/exchange',
        params: {to: toCurrency , from: fromCurrency, q: '1.0'},
        headers: {
            'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
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