const express = require('express');
const router = express.Router();


const customerController = require('../../controllers/customer');

router.route('/')
  .get(customerController.index)
  .post(customerController.newCustomer);

  router.route('/:customerID')
  .get(customerController.getCustomer)
  .put(customerController.replaceCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.removeCustomer);

//  @route DELETE api/customers/:id
//  @desc Delete an Customer
// removeCustomer: async (req, res) => {
//   try {
//     const customer = await Customer.findById(req.params.id);
//     if (!customer) throw Error('No item found');

//     const removed = await customer.remove();
//     if (!removed)
//       throw Error('Something went wrong while trying to delete the item');

//     res.status(200).json({ success: true });
//   } catch (e) {
//     res.status(400).json({ msg: e.message, success: false });
//   }


module.exports = router;