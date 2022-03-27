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
// //userName & password בדיקה אם קיים היוזר 
// const chekIfThereIsUser = async (req, res) => {
//     try {
//         console.log("chekIfThereIsUser")
//         const { user } = req.body
      
//          User.findOne({userName:user.userName,password:user.password})
//         .then((user) => {
//             if(!user)
//             user="not" 
//             console.log("user: ",user)
//             res.status(200).json({
//                 message: 'succ',
//                 user: user
//             })
//         })
//     } catch (err) {
//         res.status(400).send(err.message)
//     }
// }


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



// const getAllUsers = (req, res) => {
//         try {
//             User.find().then((users) => {
//                 res.status(200).json({
//                     message: 'succ',
//                     users: users
//                 })
//             })
//         } catch (err) {
//             res.status(400).send(err.message)
//         }
//     }

// const removeUser = async (req, res) => {
//     try {


//           User.findOneAndDelete({ _id: req.params.id }).then((user) => {
//             res.status(200).json({
//                 message: 'succ',
//                 user: user
//             })
//         })
//     } catch (er) {
//         res.status(400).send(err.message)
//     }
// }

// const updateUser = async (req, res) => {
//     try {
//         console.log("updateUser")
//         const {user} =req.body
//        console.log("user: ",user)
//          User.updateOne({_id:user.id}, {$set: user})
//         .then((user) => {
//             res.status(200).json({
//                 message: 'succ',
//                 user: user
//             })
//         })
//     } catch (err) {
//         res.status(400).send(err.message)
//     }
// }



module.exports = {
    createUser,
    // chekIfThereIsUser,
    getAllTransactionOfUser

  
}