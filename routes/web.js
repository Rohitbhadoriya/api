const express = require('express')
const UserControllers = require('../controllers/UserControllers')
const router = express.Router()
const checkauth = require('../middleware/auth')
const CategoryControllers = require('../controllers/CategoryControllers')
const ProductControllers = require('../controllers/ProdcutControllers')
const PaymentController = require('../controllers/PaymentController')
const OrderController = require('../controllers/OrderController')
//usercontrollers
router.get('/getalluser', UserControllers.getalluser)
router.get('/me', checkauth, UserControllers.getuserdetails)
router.post('/userinsert', UserControllers.userinsert)
router.post('/verifylogin', UserControllers.verifylogin)
router.get('/logout', UserControllers.logout)
router.post('/updatepassword', checkauth, UserControllers.updatepassword)
router.post('/updateprofile', checkauth, UserControllers.updateprofile)


//CategoryController
router.post('/categoryinsert', CategoryControllers.categoryinsert)
router.get('/categorydisplay', CategoryControllers.categorydisplay)
router.get('/categoryview/:id', CategoryControllers.categoryview)
router.post('/categoryupdate/:id', CategoryControllers.categoryupdate)
router.get('/categorydelete/:id', CategoryControllers.categorydelete)

//ProductController
router.post('/createproduct', ProductControllers.createproduct)
router.get('/getallproduct', ProductControllers.getallproduct)
router.get('/getallproductdetail/:id', ProductControllers.getallproductdetail)
router.post('/updateproduct/:id', ProductControllers.updateproduct)
router.get('/productdelete/:id', ProductControllers.productdelete)
// Payment Controller
router.post('/payment/process', PaymentController.processPayment)
router.get('/stripeapiKey', PaymentController.sendStripeApiKey)

// Order Contoller 
router.post('/order/create', checkauth, OrderController.newOrder)




module.exports = router