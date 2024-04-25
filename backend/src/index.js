import express from "express";
import { mongoose } from "mongoose";

const app = express();

//middleware
app.use(express.json());

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/CRUD");

export default app;
