require('dotenv').config();
const drift_token = process.env.DRIFT_TOKEN;
const axios = require('axios');
const baseUrl = 'https://driftapi.com/contacts/'
const headers = {
    'Authorization': `Bearer ${drift_token}`,
    'Content-Type': 'application/json'
}

const clearOrderNumber = async(authorId) => {

    return axios
        .patch(baseUrl + id,
            {
                "attributes": {
                    "order_number": " ",
                }
            },
            {
                headers
            }
        ).catch(err => {

            console.log(err)});
}


module.exports = {
    clearOrderNumber
}
