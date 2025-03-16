import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsOfEquipment = () => {
     const DetailsEquip = useLoaderData();
     const {itemName,description,categoryName,price,
        image,rating,customization,stockStatus, userName,userEmail, _id} = DetailsEquip;
    return (
        <div className="overflow-x-auto my-20 mx-auto w-[700px]">
             <h2 className='font-bold text-3xl text-center mb-10'>Details Of the <span className='text-yellow-800 font-extrabold'>{itemName}</span></h2>
            <div className=" bg-base-200 rounded-lg">
                <div className=" m-5 p-10 flex-col lg:flex-row-reverse">
                    <img
                    src={image}
                    alt={itemName}
                    className="mb-10" />
                    <div>
                        <h1 className="text-xl font-bold"><span className='text-yellow-800 font-extrabold'>{itemName}</span></h1>
                        <p className="py-6">
                            <div className='grid grid-cols-2 gap-5 font-bold'>
                                <p>Description : {description}</p>
                                <p>Category Name : <span className='text-amber-700'>{categoryName}</span></p>
                                <p>Rating : <span className='text-amber-700'>{rating}</span></p>
                                <p>Customization : {customization}</p>
                                <p>Stock Status : {stockStatus}</p>
                                <p>Price : <span className='text-amber-700'>{price}</span></p>
                            </div>
                        </p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsOfEquipment;