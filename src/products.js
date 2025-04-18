const mongoose = require('mongoose')
//define schema
const ProductSchema = new mongoose.Schema({
prod_name:String,
Quantity:Number,
Price:Number
})
//create model object
const ProductModel = new mongoose.model("Products",ProductSchema,"Products")
module.exports=ProductsModel