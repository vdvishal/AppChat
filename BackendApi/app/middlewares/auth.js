const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const request = require("request")
const Auth = mongoose.model('Auth')

const logger = require('./../libs/loggerLib')
const responseLib = require('./../libs/responseLib')
const token = require('./../libs/tokenLib')
const check = require('./../libs/checkLib')

let isAuthorized = (req, res, next) => {
      let tokenSecret = 'mysecretkey';
      if(!req.headers.authorization) {
        return res.status(401).send('unauthorized')
      }
      else {
        let authToken = req.headers.authorization.split(' ')[1]
        if(authToken === 'null') {
          return res.status(401).send('unauthorized')
        }
        else{
          token.verifyToken(authToken,tokenSecret,(err,decoded)=>{

            if(err){
                logger.error(err.message, 'Authorization Middleware', 10)
                let apiResponse = responseLib.generate(true, 'Failed To Authorized', 500, null)
                res.send(apiResponse)
            }
            else{
                
                req.user = {userId: decoded.data.userId}
                next()
            }
          })
      }
    } 
  }



module.exports = {
  isAuthorized: isAuthorized
}
