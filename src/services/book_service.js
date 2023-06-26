const axios = require('axios');
require('dotenv').config();
import store from '../store/index'

async function getAll(token) {
    var data = JSON.stringify({
        "collection": "books",
        "database": "personal_database",
        "dataSource": "Cluster0",
    });
                
    var config = {
        method: 'post',
        url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-luyjb/endpoint/data/v1/action/find',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        data: data
    };
                
    axios(config)
        .then(function (response) {
            console.log(response.data)
            store.commit('setBooks', response.data.documents)
            return response.data.documents
        })
        .catch(function (error) {
            console.log(error);
    });
}

async function addBook(book) {
    var data = JSON.stringify({
        "collection": "books",
        "database": "personal_database",
        "dataSource": "Cluster0",
        "document": {
            "title": book.title,
            "author": book.author,
            "genre": book.genre,
            "rating": book.rating,
            "notes": book.notes,
            "reader": book.reader
        }
    });
                
    var config = {
        method: 'post',
        url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-luyjb/endpoint/data/v1/action/insertOne',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.getters.userInfo.access_token}`,
        },
        data: data
    };
    
    axios(config)
    .then(function (response) {
        console.log(response.data)
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
    
}

export {
    getAll,
    addBook,
}