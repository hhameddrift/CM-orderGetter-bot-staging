const {orderGetter} = require("./getOrder")
const {updateContact} = require("./updateContact");
const {getAttributes} = require("./getContact");
const {orderGetter} = require("./getContact");



const mainService = async(convoId, authorId) => {
    try {
        
        const contactAttributes = await getAttributes(authorId)
        const order = await orderGetter()
        const updatedContact = await updateContact(authorId)

        console.log("Contact updated with a order status!")

    } catch (err) {
        console.log("order processing error: ");
        console.log(err);
    }
}

module.exports = {
    mainService
}
