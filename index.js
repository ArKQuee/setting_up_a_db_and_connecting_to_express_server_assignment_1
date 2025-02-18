require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); 


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to database");
  } catch (error) {
    console.error(`❌ Error connecting to database: ${error.message}`);
    process.exit(1); 
  }
};


connectDB();


app.get("/", (req, res) => {
  res.send("Customer Management System Backend is Running...");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
