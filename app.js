const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require('./routes/v1/auth.Route')


// middleware 
app.use(express.json());
app.use(cors());

app.use(authRoutes)


// api checking

app.get("/", (req, res) => {
    res.send("Authentication server is running");
  });
  

// Error Response for non-existing routes
app.all("*", (req, res) => {
    res.send("No routes found")
})

// Global error Handler
app.use(errorHandler) ;



// closing the express app on unhandled error
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
      process.exit(1);
    })
});


  module.exports = app ;