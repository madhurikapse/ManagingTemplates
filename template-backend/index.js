const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { route } = require("./routes/templateRoutes");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGODB_URL;

app.use(cors());
app.use("/api",route)

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });


// app.get("/", (req, res) => {
//   res.send("Hello madhuri kapse!");
// });





app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });