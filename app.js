const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();


// middleware 
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


  app.get("/", (req, res) => {
    res.send("Authentication Server running successfully")
  })

  app.listen(port, () => {
console.log(`Authentication server running on port ${port}`);

  })