const axios = require("axios");
require('dotenv').config()

async function getCurrencies() {
    const request = {
        method: 'GET',
        url: 'https://currency-converter13.p.rapidapi.com/list',
        headers: {
            'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
            'X-RapidAPI-Host': 'currency-converter13.p.rapidapi.com'
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
        url: 'https://currency-converter13.p.rapidapi.com/convert',
        params: {from: fromCurrency , to: toCurrency, amount: '1'},
        headers: {
            'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
            'X-RapidAPI-Host': 'currency-converter13.p.rapidapi.com'
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