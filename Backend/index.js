
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const productRoutes = require('./routes/productRoutes'); // Import product routes

dotenv.config();

const app = express(); // Initialize the app
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Use product routes
app.use('/api/products', productRoutes); // Moved after app initialization

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});