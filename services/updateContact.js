require('dotenv').config()
const drift_token = process.env.DRIFT_TOKEN
const {orderGetter} = require("./getOrder")
const axios = require('axios');
const baseUrl = 'https://driftapi.com/contacts/'
const headers = {
    'Authorization': `Bearer ${drift_token}`,
    'Content-Type': 'application/json'
}

const updateContact = async (authorId) => {
    return axios
        .patch(baseUrl + authorId, JSON.stringify({"attributes": {"order_status": orderGetter(GetOrderStatusByCMNumberForLoggedInUser)}}),
            {headers: headers})
        .then((res) => {
            return (res.data);
        }).catch(err => {
            console.log("Error locating contact attributes for contact ID: " + contactId);
            console.log("ERR HITTING URL ---> " + err.config.url);
            console.log("ERR CODE ---> " + err.response.status);
            console.log("ERR DATE ---> " + err.response.headers.date);
            console.log("ERR MSG ---> " + (err.response.data.error.message));
            console.log("ERR TYPE ---> " + (err.response.data.error.type));
            return {};
        })
}

module.exports = {
    updateContact
}
