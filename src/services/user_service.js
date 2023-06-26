const axios = require('axios');
require('dotenv').config();
import store from '../store/index'

async function auth() {
    var data = JSON.stringify({
        "key": process.env.VUE_APP_DB_KEY
    });

    var config = {
        method: 'post',
        url: 'https://realm.mongodb.com/api/client/v2.0/app/data-luyjb/auth/providers/api-key/login',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };

    let response = await axios(config)
    console.log(response)
    store.commit('setUser', response.data)
    return response.data

}

async function signIn(token, username, password) {
    // const salt = bcrypt.genSaltSync(10)
    // let saltHashPass = bcrypt.hashSync(password, salt)

    var data = JSON.stringify({
        "collection": "users",
        "database": "personal_database",
        "dataSource": "Cluster0",
        "filter": { "username": username,
                    "password": password
                }
    });
                
    var config = {
        method: 'post',
        url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-luyjb/endpoint/data/v1/action/findOne',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        data: data
    };

    let response = await axios(config)
    console.log(response)
    if (response.data.document) {
        store.commit('setSignedIn', true)
        store.commit('setAdmin', response.data.document.isAdmin)
    }
    else {
        store.commit('setSignedIn', false)
    }
    return response.data
}

async function createUser(token, user) {
    // console.log("here")
    // const salt = bcrypt.genSaltSync(10)
    // let saltHashPass = bcrypt.hashSync(user.password, salt)

    var data = JSON.stringify({
        "collection": "users",
        "database": "personal_database",
        "dataSource": "Cluster0",
        "document": {
            "username": user.username,
            "password": user.password,
            "isAdmin": user.isAdmin
        }
    });
                
    var config = {
        method: 'post',
        url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-luyjb/endpoint/data/v1/action/insertOne',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        data: data
    };
                
    axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
    });
    
}

export {
    auth,
    createUser,
    signIn
}