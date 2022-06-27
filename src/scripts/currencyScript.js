const axios = require("axios");

const API_KEY = 'cd8eaa5befmsh06589e7ae638e2ap1a2478jsn1358b6cc67bb'

async function getCurrencies() {
    const request = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/listquotes',
        headers: {
            'X-RapidAPI-Key': API_KEY,
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
            'X-RapidAPI-Key': API_KEY,
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

export { getRate, getCurrencies };