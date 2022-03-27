const Transaction = require('../Models/transaction')
const User = require('../Models/user')

const express = require('express')
const bodyParser = require('body-parser')
const body = require('body')
const mongoose = require('mongoose');
const { translateAliases } = require('../Models/transaction')

//  יצירת עסקה חדשה
const createTransaction = async (req, res) => {
       console.log("createTransaction----------req.body.transaction:  ",req.body.transaction)
    const transaction = new Transaction(req.body.transaction);
    await transaction.save()
        .then((transaction) => { 
            res.status(200).send(transaction)})
        .catch(err => {
            console.log("err: ",err)
             res.status(400).send(err) });
}

//----פונקיה זו מוחקת עסקה 
// מוחקת מהמסד את העסקה לפי קוד העסקה
// ומוחקת את קוד עסקה ממערך העסקאות של היוזר
const removeTransaction = async (req, res) => {
    try {
        User.updateOne({ _id: req.params.id }, { $pull: { transactions: req.params.transaction_id } }, function(err, transaction){
           Transaction.findOneAndDelete({ _id: req.params.transaction_id }).then((transaction)=>{
            res.status(200).json({
                message: 'succ',
                transaction: transaction
            })
        })})
    }
     catch (err) {
        res.status(400).send(err.message)
    }
}


module.exports = {
    createTransaction,
    removeTransaction
  
}