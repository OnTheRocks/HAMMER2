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

module.exports = router;