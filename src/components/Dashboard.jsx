import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify'
function Dashboard(){
    const [products,setProducts] = useState([])
    useEffect(()=>{
        viewProducts()
    },[])
    const viewProducts = async ()=>{
        try{
            const response = await axios.get("http://localhost:8000/viewProducts")
            setProducts(response.data)
        }catch(error){
        console.log(error)
        }
    }
    const deleteProduct = async (id) => {
        const isConfirmed = confirm('Are you sure you want to delete this product?');
        
        if (isConfirmed) {
            try {
                const response = await axios.delete(`http://localhost:8000/deleteProduct/${id}`);
                toast.success(response.data.message);
                viewProducts(); //refresh after delete
            } catch (error) {
                console.log(error);
            }
        }
    };

    // const deleteProduct = async ()=>{
    //     const isConfirmed = confirm("Do you want to delete?")
    //     if (isConfirmed){
    //         try{
    //             const response = await axios.delete(`http://localhost:8000/deleteProduct/${id}`)
    //             toast.success(response.data.message)
    //             viewProducts()
    //         }catch(error){
    //         console.log(error)
    //         }
    //     }
    // }
    return(
        <div>
            <h1 className="text-center font-bold text-2xl text-purple-500">
                Fuel cost Savings
            </h1>
            <table className="border border-gray-400 w-[80%] mx-auto mt-8">
                <caption className="text-left mb-4">
                    <Link to={'/addproduct'} className="text-xl text-blue-700 underline-offset-4 cursor-pointer">Add New Product</Link>
                </caption>
                <thead>
                    <tr className="bg-green-200 border border-gray-400">
                        <th className="border border-gray-400 px-3 py-3">Si.No</th>
                        <th className="border border-gray-400 px-3 py-3">Name</th>
                        <th className="border border-gray-400 px-3 py-3">Quantity</th>
                        <th className="border border-gray-400 px-3 py-3">Price</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {products.map((item,index)=>{
                            return (
                                <tr key={item._id || index} className="border border-gray-400 text-lg">
                                    <td className="border border-gray-400 px-3 py-3">{index+1}</td>
                                    <td className="border border-gray-400 px-3 py-3">{item.name}</td>
                                    <td className="border border-gray-400 px-3 py-3">{item.quantity}</td>
                                    <td className="border border-gray-400 px-3 py-3">{item.price}</td>
                                    <td className="border border-gray-400 px-3 py-3">
                                        <Link to={`/editproduct/${item._id}`} className="text-blue-600 underline-offset-4 cursor-pointer">Edit</Link>
                                    </td>
                                    <td className="border border-gray-400 px-3 py-3">
                                        <button onClick={() =>deleteProduct(item._id)} className="text-red-400 underline-offset-4 cursor-pointer">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}
export default Dashboard