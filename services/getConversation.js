//require('dotenv').config()
const axios = require("axios");


const getConversation = async (conversationId, secret) => {
const drift_token = process.env.DRIFT_TOKEN
const drift_token = secret
  const baseUrl = "https://driftapi.com/conversations/";
  const headers = {
    Authorization: `Bearer ${DRIFT_AUTH_TOKEN}`,
    "Content-Type": "application/json",
  };


  return axios
    .get(baseUrl + conversationId, { headers: headers })
    .then((res) => {
      let convoObject = res.data;
      return convoObject;
    })
    .catch((err) => {
      console.log("Error fetching conversation data for conversation " + conversationId);
      console.log("ERR HITTING URL ---> " + err.config.url);
      console.log("ERR CODE ---> " + err.response.status);
      console.log("ERR DATE ---> " + err.response.headers.date);
      console.log("ERR MSG ---> " + err.message);
      return "Error"
    });
};

module.exports = {
  getConversation,
};
