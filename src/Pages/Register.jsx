import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
   const {createUser} = useContext(AuthContext);
   const navigate = useNavigate();

    const handleRegister = (e) => {
       e.preventDefault();
       const form = e.target;

       const name = form.name.value;
       const email = form.email.value;
       const photo = form.photo.value;
       const password = form.password.value;

       
       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

       if(!passwordRegex.test(password)){
          Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password must contain uppercase, and lowercase letters, and have to be at least 6 characters",
         });
         return
       }
   
      
      createUser(email,password)
        .then(result => {
          console.log(result.user);
          const creationTime = result.user.metadata.creationTime;
          const user = {name,email,photo,creationTime};
          e.target.reset();
         
          // save user data to database
          fetch("http://localhost:3000/users",{
            method: "POST",
            headers : {
              "content-type" : "application/json"
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            
            
            if(data.insertedId){
              
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully register the user",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
            }
          })
        })
        .catch(error => {
          console.log(error);
        });
    }

    return (
        <div>
         <div className="hero bg-base-200 min-h-screen">
           <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-6xl font-bold">Register Here!!</h1>
                <p className="py-6 text-lg font-bold">
                  Register your Account here, And start your journey with us
                </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
             <form onSubmit={handleRegister} className="card-body">
                 <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                  <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                   <label className="label">
                     <span className="label-text">Photo URl</span>
                   </label>
                  <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
                <span className='text-sm'>Already have an Account <Link className='text-green-800 font-bold' to="/login" >LogIn</Link> </span>
            </form>
            </div>
           </div>
         </div>
      </div>
    );
};

export default Register;