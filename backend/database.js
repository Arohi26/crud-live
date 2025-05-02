const mongoose = require("mongoose");
async function dbConn() {
  const conn = await mongoose.connect(
    "mongodb+srv://aarohi:root@cluster0.gua5tp1.mongodb.net/crud-live?retryWrites=true&w=majority&appName=Cluster0"
  );
  if (conn) {
    console.log("database connect successfully");
  } else {
    console.log("connection fail");
  }
}
module.exports = dbConn;
