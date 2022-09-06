const { orderGetter } = require("./getOrder");
const { updateContact } = require("./updateContact");
const { getAttributes } = require("./getContact");


const mainService = async (convoId, authorId) => {
  try {
    const contactAttributes = await getAttributes(authorId);
    const orderStatus = await orderGetter(contactAttributes);
    await updateContact(authorId, orderStatus);

  } catch (err) {
    console.log("order processing error: ");
    console.log(err);
  }
};

module.exports = {
  mainService,
};
