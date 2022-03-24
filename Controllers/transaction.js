const Transaction = require('../Models/transaction')
const express = require('express')
const bodyParser = require('body-parser')
const body = require('body')
const mongoose = require('mongoose');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));


const createTransaction = async (req, res) => {
       console.log("createTransaction----------req.body.transaction:  ",req.body.transaction)
    const transaction = new Transaction(req.body.transaction);
    console.log("transaction : ", transaction)
    await transaction.save()
        .then((p) => { 
            console.log("p:-----------",p)
            res.status(200).send(p)})
        .catch(err => {
            console.log("err:-----------",err)
             res.status(400).send(err) });
}
const removeTransaction = async (req, res) => {
    try {


          Transaction.findOneAndDelete({ _id: req.params.id }).then((transaction) => {
            res.status(200).json({
                message: 'succ',
                transaction: transaction
            })
        })
    } catch (er) {
        res.status(400).send(err.message)
    }
}


module.exports = {
    createTransaction,
    removeTransaction
  
}