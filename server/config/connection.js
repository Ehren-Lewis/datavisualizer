const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

mongoose.set("strictQuery", "true")

console.log(mongoose.connection);
module.exports = mongoose.connection;