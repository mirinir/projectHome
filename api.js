const express = require('express')
const router = express.Router()
const transactionController = require('./Controllers/transaction')
const UserController = require('./Controllers/user')

//
router.post('/createTransactions', transactionController.createTransaction)
router.post('/removeTransaction/:id/:transaction_id', transactionController.removeTransaction)



router.post('/getAllTransactionOfUser', UserController.getAllTransactionOfUser)
router.post('/createUser', UserController.createUser)




module.exports = router;