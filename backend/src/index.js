const express = require("express");
const mongoose = require("mongoose");

const dishesRouter = require("./routes/DishRoutes");

require("dotenv").config();

const app = express();

//middleware
app.use(express.json());

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

mongoose.connect(process.env.MONGO_URL);

app.use("/api/dishes", dishesRouter);

module.exports = app;
