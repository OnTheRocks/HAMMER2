// -----Customer Model----------
const Customer = require('../models/Customer');

module.exports = {

//  @route GET api/customers
//  @desc Get ALL Customers  
index: async (req, res) => {
  try {
    const customers = await Customer.find();
    if (!customers) throw error('No customers');
    res.status(200).json(customers);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
},

//  @route POST api/customers
//  @desc Create a Customer
newCustomer: async (req, res, next) => {
  try {
    const newCustomer = await Customer(req.body);
    const customer = await newCustomer.save();
    res.status(201).json(customer);
  } catch(err) {
      next(err);
  }
},

getCustomer: async(req, res, next) => {
  try {
    const { customerID } = req.params;
    const customer = await Customer.findById(customerID);
    res.status(200).json(customer);
  } catch(err) {
      next(err);
  }
},

replaceCustomer: async(req, res, next) => {
  // req.body must contain all fields
    try {
      const { customerID } = req.params;
      const newCustomer = req.body;
      const result = await Customer.findByIdAndUpdate(customerID, newCustomer);
      res.status(200).json({ Success: true });
    } catch(err) {
        next(err);
    }
  }, 

updateCustomer: async(req, res, next) => {
  // req.body may contain any number of fields
    try {
    const { customerID }= req.params;
    const newCustomer = req.body;
    const result = await Customer.findByIdAndUpdate(customerID, newCustomer);
    res.status(200).json({ Success: true });
    } catch(err) {
        next(err);
    }
  },
    
  removeCustomer: async(req, res) => {
    const { customerID } = req.params;
    const result = await Customer.findByIdAndDelete(customerID);
    res.status(200).json({ Success: true });
  },

}