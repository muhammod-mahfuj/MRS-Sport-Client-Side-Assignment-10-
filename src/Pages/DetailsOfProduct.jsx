import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLoaderData } from 'react-router-dom';

const DetailsOfProduct = () => {
   useEffect(() => {
         fetch('./ProductData.json/')
         .then((res) => res.json())
         .then((data) => {
             console.log(data)
         })
     }, 
     [])
    return (
        <>
          <Navbar></Navbar>
          <div className='text-center py-10'>
            <h3 className='font-bold text-4xl'> Details Of The Product</h3>
            <div>
                <h2 className='font-bold text-2xl mt-10'>DATA IS Loading, Please wait a second</h2>
            </div>
         </div>
         <Footer></Footer>
        </>
    );
};

export default DetailsOfProduct;