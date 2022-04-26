require('dotenv').config()
const axios = require('axios');
const cmNumber = `CM000019947`
const SessionToken = 'f84d7df8-4611-4beb-97f1-6ed54fb81c59'
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
            console.log("Order Received.")
            return JSON.stringify(res.data);
        }).catch(err => {
            console.log("ERR CODE ---> " + err);
            return {};
        })
}

module.exports = {
    orderGetter
}
