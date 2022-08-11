const {orderGetter} = require("./getOrder")
const {updateContact} = require("./updateContact");
const {getAttributes} = require("./getContact");
const {clearOrderNumber} = require('./clearDriftAttribute');



const mainService = async(convoId, authorId) => {
    try {
        
        const contactAttributes = await getAttributes(authorId)
        const orderStatus = await orderGetter()
        const updatedContact = await updateContact(authorId)
                console.log("Contact updated with a order status!")
        const clearOrderNumber =  await clearOrderNumber(authorId);
                console.log('Cleared the OrderNumber.');


    } catch (err) {
        console.log("order processing error: ");
        console.log(err);
    }
}

module.exports = {
    mainService
}
