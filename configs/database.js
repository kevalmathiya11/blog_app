require("dotenv").config();

const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("database connection Successfully"))
    .catch((error) => {
      console.error("Error:", error);
      process.exit(1);
    });
};

module.exports = dbConnect;
