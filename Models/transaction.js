const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//מודל של עסקאות - כך יוצג במסד נתונים
const transactions = new Schema({
    name: String,
    sum:Number,
    user: [{ type: Schema.Types.ObjectId, ref: 'users' }]
});

module.exports = mongoose.model("transactions", transactions);