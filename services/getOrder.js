require("dotenv").config();
const axios = require("axios");


const orderGetter = async (contactAttributes) => {
  const cmNumber = contactAttributes.order_number
  const requestUrl = `https://dlapistage.covalentmetrology.com/api/order/v1/GetOrderStatusByCMNumberForLoggedInUser/${cmNumber}`;
  const config = {
    method: "get",
    url: requestUrl,
    headers: {
      Accept: "*/*",
      SessionToken: `${contactAttributes.session_token}`,
    }
    
  };
  return axios(config)
    .then((res) => {
        console.log(res.data.data.opStatus)
        return res.data.data.opStatus
    
    })
    .catch((err) => {
      console.log("ERR CODE ---> " + err);
    });
};

module.exports = {
  orderGetter,
};
