const express = require('express');
const router = express.Router();

// -----Customer Model----------
const Customer = require('../../models/Customer');

//  @route GET api/customers
//  @desc Get ALL Customers
router.get('/', (req, res) => {
  Customer.find()
    .sort({ name: 1 })
    .then(customers => res.json(customers))
});

//  @route POST api/customers
//  @desc Create a Customer
router.post('/', (req, res) => {
  const newCustomer = new Customer({
    custName: req.body.custName,
    custStreet: req.body.custStreet,
    custCity: req.body.custCity,
    custState: req.body.custState,
    custZip: req.body.custZip,
    locations: req.body.locations
  });
  newCustomer.save().then(customer => res.json(customer));
});

//  @route DELETE api/customers/:id
//  @desc Delete an Customer
router.delete('/:id', (req, res) => {
  Customer.findById(req.params.id).then(customer =>
    customer.remove().then(() => res.json({success: true}))
  )
  .catch(err => res.status(404).json({success: false}));  
});



module.exports = router;
