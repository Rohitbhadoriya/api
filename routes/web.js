const express = require('express')
const UserControllers = require('../controllers/UserControllers')
const router = express.Router()
const checkauth = require('../middleware/auth')
const CategoryControllers = require('../controllers/CategoryControllers')
const ProductControllers = require('../controllers/ProdcutControllers')
//usercontrollers
router.get('/getalluser',UserControllers.getalluser)
router.get('/getuserdetails/:id',checkauth,UserControllers.getuserdetails)
router.post('/userinsert',UserControllers.userinsert)
router.post('/verifylogin',UserControllers.verifylogin)
router.get('/logout/:id',UserControllers.logout)
router.post('/updatepassword/:id',UserControllers.updatepassword)
router.post('/updateprofile/:id',UserControllers.updateprofile)


//CategoryController
router.post('/categoryinsert',CategoryControllers.categoryinsert)
router.get('/categorydisplay',CategoryControllers.categorydisplay)
router.get('/categoryview/:id',CategoryControllers.categoryview)
router.post('/categoryupdate/:id',CategoryControllers.categoryupdate)
router.get('/categorydelete/:id',CategoryControllers.categorydelete)

//ProductController
router.post('/createproduct',ProductControllers.createproduct)
router.get('/getallproduct',ProductControllers.getallproduct)
router.get('/getallproductdetail/:id',ProductControllers.getallproductdetail)
router.post('/updateproduct/:id',ProductControllers.updateproduct)
module.exports = router