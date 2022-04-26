const {orderGetter} = require("./getOrder")
const {updateContact} = require("./updateContact");

const mainService = async(contactId) => {
    try {
        const order = await orderGetter()
        const updatedContact = await updateContact(contactId, order)
        console.log("Contact updated with a order status!")
    } catch (err) {
        console.log("order processing error: ");
        console.log(err);
    }
}

module.exports = {
    mainService
}
