require('dotenv').config()
const {getContact} = require("./getContact")

const axios = require('axios');
const cmNumber = getContact(contactAttributes.order_number)
const sessionToken = getContact(contactAttributes.session_token)
const requestUrl = `https://dlapistage.covalentmetrology.com/api/order/v1/GetOrderStatusByCMNumberForLoggedInUser/${cmNumber}`
const data = ''
const config = {
    method:'get',
    url: requestUrl,
    headers: {
        'Accept': '*/*',
        'SessionToken': `${sessionToken}`
    },
    data : data
}

const orderGetter = async () => {
    return axios(config)
        .then((res) => {
            if (res.data) {
                console.log("Order Received.")
                let GetOrderStatusByCMNumberForLoggedInUser = JSON.stringify(res.data.data.opStatus)
    return GetOrderStatusByCMNumberForLoggedInUser
            }
        }).catch(err => {
            console.log("ERR CODE ---> " + err);
            return {};
        })
}

module.exports = {
    orderGetter
}
