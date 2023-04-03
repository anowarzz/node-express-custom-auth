const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = require("./app");


// database connection
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(`Database connection is successful`);
})
.catch(err => {
  console.log(err);
})



app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

