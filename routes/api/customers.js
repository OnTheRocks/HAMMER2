const express = require('express');
const router = express.Router();

// -----Customer Model----------
const Customer = require('../../models/Customer');

//  @route GET api/customers
//  @desc Get ALL Customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    if (!customers) throw error('No customers');
    res.status(200).json(customers);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

//  @route POST api/customers
//  @desc Create a Customer
router.post('/', async (req, res) => {
  const newCustomer = new Customer({
    custName: req.body.custName,
    custStreet: req.body.custStreet,
    custCity: req.body.custCity,
    custState: req.body.custState,
    custZip: req.body.custZip,
    locations: req.body.locations
  });
  try {
    const customer = await newCustomer.save();
    if (!customer) throw Error('Something went wrong saving the customer');
    res.status(200).json(customer);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

//  @route DELETE api/customers/:id
//  @desc Delete an Customer
router.delete('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) throw Error('No item found');

    const removed = await customer.remove();
    if (!removed)
      throw Error('Something went wrong while trying to delete the item');

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;