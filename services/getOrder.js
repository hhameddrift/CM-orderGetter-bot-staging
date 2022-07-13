require('dotenv').config()
const {getContact} = require("./getContact")

const axios = require('axios');
const cmNumber = getContact(attributes.driftCmNumber)
const SessionToken = getContact(attributes.driftSessionToken)
const requestUrl = `https://dlapistage.covalentmetrology.com/api/order/v1/GetOrderStatusByCMNumberForLoggedInUser/${cmNumber}`
const data = ''
const config = {
    method:'get',
    url: requestUrl,
    headers: {
        'Accept': '*/*',
        'SessionToken': `${SessionToken}`
    },
    data : data
}

const orderGetter = async () => {
    return axios(config)
        .then((res) => {
            if (res.data) {
                console.log("Order Received.")
            return JSON.stringify(res.data);
            }
        }).catch(err => {
            console.log("ERR CODE ---> " + err);
            return {};
        })
}

module.exports = {
    orderGetter
}
