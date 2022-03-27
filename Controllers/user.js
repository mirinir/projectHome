const User = require('../Models/user')
const express = require('express')
const bodyParser = require('body-parser')
const body = require('body')
const mongoose = require('mongoose');
const transaction = require('../Models/transaction');

//יצירת יוזר חדש  
const createUser = async (req, res) => {
       console.log("createUser")
    const user = new User(req.body.user);
    console.log("user: ", user)
    await user.save()
        .then((u) => { 
            console.log("p:-----------",u)
            res.status(200).send(u)})
        .catch(err => {
            console.log("err:-----------",err)
             res.status(400).send(err) });
}


//חיפוש אם יוזר קיים - לפי שם משתמש ןסיסמא
// ואם קיים שולפת את כל נתוני היוזר כולל הנתונים על כל העסקאות שלו  
const getAllTransactionOfUser = (req, res) => {
    try {
        const {user} = req.body
        console.log("user: ",user)
        User.findOne({userName:user.userName,password:user.password})
             .populate('transactions')
        .then((user) => {
            console.log("user: ",user)
            res.status(200).json({
                message: 'succ',
                user: user
            })
        })
    } catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports = {
    createUser,
    getAllTransactionOfUser

  
}