const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//מודל של יוזרים - כך יוצג במסד נתונים 
const users = new Schema({
    name: String,
    userName: String,
    password:String,
    transactions: [{ type: Schema.Types.ObjectId, ref: 'transactions' }]
});

module.exports = mongoose.model("users", users);