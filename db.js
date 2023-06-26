const mongoose = require("mongoose");

function connectionDb() {
  mongoose.connect("mongodb://127.0.0.1:27017/auth", { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "Error connecting to MongoDB:"));
  db.once("open", () => {
    console.log("Connected to MongoDB successfully.");
  });
}

module.exports = connectionDb;
