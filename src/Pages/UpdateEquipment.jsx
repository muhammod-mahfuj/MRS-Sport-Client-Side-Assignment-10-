import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateEquipment = () => {
    const {user} = useContext(AuthContext);

    const navigate = useNavigate();

    const MyListEquipment = useLoaderData();

    const {itemName,description,categoryName,price,
        image,rating,customization,stockStatus, userName,userEmail, _id} = MyListEquipment;
      
        const handleUpdateEquipment = (e) => {
            e.preventDefault();
 
            const form = e.target;

            const Name = form.itemName.value;
            const newDescription = form.description.value;
            const categoryName = form.categoryName.value;
            const price = form.price.value;
            const image = form.image.value;
            const rating = form.rating.value;
            const customization = form.customization.value;
            const stockStatus = form.stockStatus.value;
            const userName = form.userName?.value;
            const userEmail = form.userEmail?.value;

            const UpdateEquip ={itemName: Name,description: newDescription,categoryName,price,
                image,rating,customization,stockStatus, userName,userEmail};

            fetch(`https://mrs-sports-server.vercel.app/equipment/${_id}`,{
                   method: "PATCH",
                   headers: {
                    'Content-Type' : "application/json"
                   },
                   body: JSON.stringify(UpdateEquip)
                  })
                  .then(res => res.json())
                  .then(data => {
                   console.log(data);
                   if(data.modifiedCount){
                       Swal.fire({
                           position: "top-end",
                           icon: "success",
                           title: `The Equipment has been Updated successfully`,
                           showConfirmButton: false,
                           timer: 1500
                       });
                       navigate('/home/mylist');
                   }
                  })
        }
        
    return (
        <div className='bg-base-200'>
            <div className="hero  min-h-screen my-10 ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update the Equipment </h1>
                        <p className="py-6 text-sm text-center">
                            Admin can Update the added Sports Equipment to the store.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-[800px] shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdateEquipment} className="card-body grid gap-5 grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name : </span>
                            </label>
                            <input type="text" placeholder="Item name" name='itemName' className="input input-bordered" defaultValue={itemName} />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Description : </span>
                          </label>
                          <input type="text" placeholder="Description" name='description' className="input input-bordered" defaultValue={description} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category Name : </span>
                            </label>
                            <input type="text" placeholder="Category Name" name='categoryName' className="input input-bordered"defaultValue={categoryName} />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Price</span>
                          </label>
                          <input type="text" placeholder="Price" name='price' className="input input-bordered" defaultValue={price}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image : </span>
                            </label>
                            <input type="text" placeholder="Image" name='image' className="input input-bordered" defaultValue={image} />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Rating : </span>
                          </label>
                          <input type="text" placeholder="Rating" name='rating' className="input input-bordered" defaultValue={rating} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization  : </span>
                            </label>
                            <input type="text" placeholder="Customization " name='customization' className="input input-bordered" defaultValue={customization} />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Stock Status</span>
                          </label>
                          <input type="text" placeholder="available product quantity" name='stockStatus' className="input input-bordered" defaultValue={stockStatus} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name  : </span>
                            </label>
                           { user ? <input type="text" placeholder="User's Name" readOnly name='userName' className="input input-bordered" defaultValue={user?.displayName} /> : ""} 
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">User Email</span>
                          </label>

                          { user ? <input type="email" placeholder="User's email" readOnly name='userEmail' className="input input-bordered" defaultValue={user?.email} /> : ""} 
                        </div>
                        <div className="form-control  mt-6">
                           <button className="btn w-[700px] mr-5 ml-5 btn-primary">Add Equipment</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateEquipment;