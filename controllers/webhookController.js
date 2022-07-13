const {mainService} = require("../services/mainService")

const processWebhook = async(req, res) => {
    const type = req.body.type
    const button_body = req.body.data.body
    const contactId = req.body.data.author.id
    if (type === "button_clicked" && button_body === "Order Status") {
        
        console.log("Acquiring an Order Status! Preloading order from order service.")
        res.status(200 && res.success === "true")
        await mainService(contactId)
    } else {
        res.status(500).send("Server Error")
    }
}

module.exports = {
    processWebhook,
}
