const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')

const checkauth = async (req, res, next) => {
    // console.log('Hello middleware')
    const { token } = req.cookies
    //console.log(token)
    if (!token) {
        res
            .status(401)
            .json({ status: "failed", message: "Unauthorized user please no token" });
    } else {
        const verifytoken = jwt.verify(token, 'rohit@1234')
        // For user data show 
        const data = await UserModel.findOne({ _id: verifytoken.ID })
        // console.log(data)
        req.data1 = data
        // console.log(verifytoken)
        next()
    }
}
module.exports = checkauth;