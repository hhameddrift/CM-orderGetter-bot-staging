const {mainService} = require("../services/mainService")

const processWebhook = async(req, res) => {
    const type = req.body.type
    const button_body = req.body.data.body
    const convoId = req.body.data['conversationId']
    const authorId = req.body.data.author.id;

    if (type === "button_clicked" && button_body === "Order Status") {
        
        console.log("Acquiring an Order Status! Preloading order from order service.")
        
        res.status(200)
        await mainService(convoId, authorId)
    } else {
        res.status(500).send("Server Error")
    }
}

module.exports = {
    processWebhook,
}
