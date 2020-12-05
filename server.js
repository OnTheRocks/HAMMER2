require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const customers = require('./routes/api/customers');

const app = express();

app.use(express.json());

const DB = process.env.DB;

//-------------- Connect to Mongo ----------------
mongoose
  .connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

  // ----Use Routes----------
  app.use('/api/customers', customers);

  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server started on port ${port}`));