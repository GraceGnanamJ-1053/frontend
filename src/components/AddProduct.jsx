import React, { useState } from "react"
// import React from "react";
import axios from "axios";
import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'
function AddProduct(){
        const [name, setName] = useState('')
        const [quantity, setQuantity] = useState(0)
        const [price, setPrice] = useState(0)
    
        const saveProduct = async (e) => {
            e.preventDefault()
            try {
                const response = await axios.post('https://backend-e7yx.onrender.com/addProduct', { name, quantity, price });
                toast.success(response.data.message);
            } catch (error) {
                console.log(error);
            }
        }
    
    
    return(
        <div className="max-w-md mx-auto mt-12 pb-12">
            
            <h1 className="text-blue-600 text-2xl mb-4 text-center">Add New Products</h1>
            <Link to={'/'} className="mb-4 text-xl text-purple-400 underline-offset-2 cursor-pointer">View Products</Link>
            <form onSubmit={saveProduct} className="flex flex-col items-center">
                <input type="text" placeholder="Enter Product Name" required
                className="border border-gray-400 mb-4 rounded px-3 py-2 text-lg"
                onChange={(e)=>setName(e.target.value)}
                /> 
                <input type="number" placeholder="Number of items" required
                className="border border-gray-400 mb-4 rounded px-3 py-2 text-lg"
                onChange={(e)=>setQuantity(e.target.value)}
                /> 
                <input type="number" placeholder="Price" required
                className="border border-gray-400 mb-4 rounded px-3 py-2 text-lg"
                onChange={(e)=>setPrice(e.target.value)}
                /> 
                <div className="text-center">
                    <button className="bg-purple-400 px-3 py-2 rounded-2xl text-white">
                        Save Product
                    </button>
                </div>
            </form>
        </div>
    )
}
export default AddProduct