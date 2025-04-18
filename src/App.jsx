// import { useState,useEffect } from 'react'
import React from 'react';
import './App.css'
// import axios from 'axios';
import './index.css';
// import RegisterForm from './RegisterForm';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import EditProduct from './components/EditProduct';
import AddProduct from './components/AddProduct';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, Bounce} from 'react-toastify'
// function App() {
// const [message,setMessage] = useState('')
// useEffect(()=>{
// //Fetch ApI
// axios.get("http://localhost:8000/")
// .then(response => {
// setMessage(response.data)
// })
// .catch(error=>{
// setMessage(error.message)
// })
// },[])
// return (
// <>
// <h1 className='text-purple-600'>Welcome to Fuel Station Management System</h1>
// <RegisterForm/>
// </>
// )
// }
// export default App

function App(){
    return(
        <>
            <BrowserRouter>
            <Header/>
            <main className='bg-gray-100 p-6 y-12'>
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/addProduct' element={<AddProduct/>}/>
                    <Route path='/editProduct/:id' element={<EditProduct/>}/>
                    
                </Routes>
            </main>
            <Footer/>
            <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} 
            closeOnClick={true} trainsition={Bounce} theme="colored"/>
            </BrowserRouter>
        </>
    )
}
export default App