import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductSection = () => {
    const [equipments ,setEquipments] = useState([]);

    useEffect(() => {
        fetch('./ProductData.json')
        .then((res) => res.json())
        .then((data) => {
            setEquipments(data)
        })
    }, 
    [])
  
    return (
        <div className='text-center  my-10'>
            <h2 className='font-bold text-5xl mb-3'>Products </h2>
            <p className='w-2/3 mx-auto'>Explore a premium collection of sports equipment, apparel, and accessories designed for athletes of all levels. Find top-quality gear to enhance your performance and enjoy your game with the best products available!</p>
            <div>
               {equipments.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 my-10'>
                    { equipments.map(equipment => {
             
                 const {id,name,image,price,category,description} = equipment;
                
                    return (
                        <div key={id} className=' '>
                           <div className="card   bg-base-100 shadow-xl ">
                              <div className='' >
                                <figure>
                                   <img className='p-5 m-1 w-3/5  object-cover'
                                   src={image}
                                   alt="Equipment Photo" />
                                 </figure>
                              </div>
                               <div className="card-body ">
                                   <h2 className="card-title font-bold">{name}</h2>
                                   <div className='space-y-2 font-bold'>
                                               <p>Description : <span className='text-amber-700'>{description}</span></p>
                                               <p>Category Name : {category}</p>
                                               <p>Price :<span className='text-amber-700'> {price}</span></p>
                                           </div>
                                   <div className="card-actions justify-end gap-5 mt-3">
                                   <Link to={id} className="btn btn-primary">Details</Link>
                                   </div>
                               </div>
                           </div>
                       </div>
                   );           
                     })}           
                </div>
               ) : (
                   <p>Loading products...</p>
               )}
            </div>
        </div>
    );
};

export default ProductSection;