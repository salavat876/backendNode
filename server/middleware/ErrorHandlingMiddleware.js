const ApiError = require ('../error/ApiError');
const e = require("express");

module.exports = function (err,req,res,next){
    console.log(err)
    return res.status(500).json({message:err.message})
}