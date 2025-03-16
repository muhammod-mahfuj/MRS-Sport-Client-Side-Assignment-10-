import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddEquipment = () => {
    
    const {user} = useContext(AuthContext);
    console.log(user, user?.name, user?.email)
     
    const handleAddEquipment = (e) => {
       e.preventDefault();

       const form = e.target;
       const itemName = form.itemName.value;
       const description = form.description.value;
       const categoryName = form.categoryName.value;
       const price = form.price.value;
       const image = form.image.value;
       const rating = form.rating.value;
       const customization = form.customization.value;
       const stockStatus = form.stockStatus.value;
       const userName = form.userName?.value;
       const userEmail = form.userEmail?.value;

       const addEquip ={itemName,description,categoryName,price,
        image,rating,customization,stockStatus, userName,userEmail}

       fetch('http://localhost:3000/equipment',{
        method: "POST",
        headers : {
            'content-type' : "application/json"
        },
        body: JSON.stringify(addEquip)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${itemName} has been Added`,
                showConfirmButton: false,
                timer: 1500
            });
           
        }
        form.reset();
       })
    }
    return (
        <div className='bg-base-200'>
          

            <div className="hero  min-h-screen my-10 ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Equipments </h1>
                        <p className="py-6 text-sm text-center">
                            Admin can add Sports Equipment to the store.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-[800px] shrink-0 shadow-2xl">
                    <form onSubmit={handleAddEquipment} className="card-body grid gap-5 grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name : </span>
                            </label>
                            <input type="text" placeholder="Item name" name='itemName' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Description : </span>
                          </label>
                          <input type="text" placeholder="Description" name='description' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category Name : </span>
                            </label>
                            <input type="text" placeholder="Category Name" name='categoryName' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Price</span>
                          </label>
                          <input type="text" placeholder="Price" name='price' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image : </span>
                            </label>
                            <input type="text" placeholder="Image" name='image' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Rating : </span>
                          </label>
                          <input type="text" placeholder="Rating" name='rating' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization  : </span>
                            </label>
                            <input type="text" placeholder="Customization " name='customization' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Stock Status</span>
                          </label>
                          <input type="text" placeholder="available product quantity" name='stockStatus' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name  : </span>
                            </label>
                           { user ? <input type="text" placeholder="User's Name" readOnly name='userName' className="input input-bordered" defaultValue={user?.name} /> : ""} 
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

export default AddEquipment;