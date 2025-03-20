import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const MyEquipmentList = () => {
    const equipmentMyLists = useLoaderData();
    const [equipments ,setEquipments] = useState(equipmentMyLists);

    
    
        const handleDelete = (id,itemName) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://mrs-sports-server.vercel.app/equipment/${id}`,{
                        method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                            if(data.deletedCount){
                                 Swal.fire({
                                    title: "Deleted!",
                                    text: ` ${itemName} Equipment has been deleted.`,
                                    icon: "success"
                                  });
                                const remainingEquipments = equipments.filter((equipment) => equipment._id !== id);
                                setEquipments(remainingEquipments);
                            }              
                    })
                
                }
              })};

    return (
        <div className='text-center my-10 mx-10'>
            <h3 className='font-extrabold text-3xl'>My Equipment : {equipments.length}</h3>
            <div>
                {
                   equipments.map(equipment => {

                    const {itemName,description,categoryName,price,
                        image,rating,customization,stockStatus, userName,userEmail, _id} = equipment;
                        
                        return (
                             <div key={_id} className='my-6'>
                                <div className="card card-side bg-base-100 shadow-xl ">
                                    <figure>
                                        <img className='p-5 m-1'
                                        src={image}
                                        alt="Equipment Photo" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title font-bold">{itemName}</h2>
                                        <div className='grid grid-cols-3 gap-5 font-bold'>
                                                    <p>Description : <span className='text-amber-700'>{description}</span></p>
                                                    <p>Category Name : {categoryName}</p>
                                                    <p>Rating : <span className='text-amber-700'>{rating}</span></p>
                                                    <p>Customization : {customization}</p>
                                                    <p>Stock Status : <span className='text-amber-700'>{stockStatus}</span></p>
                                                    <p>Price : {price}</p>
                                                </div>
                                        <div className="card-actions justify-end gap-5 mt-3">
                                        <Link to={`/home/mylist/${_id}`} className="btn btn-primary">Update</Link>
                                        <button onClick={() => handleDelete(_id,itemName)} className="btn btn-warning">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
        })}           
            </div>
        </div>
    );
};

export default MyEquipmentList;