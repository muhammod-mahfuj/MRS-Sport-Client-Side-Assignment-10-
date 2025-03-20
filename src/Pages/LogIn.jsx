import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LogIn = () => {

   const {logInUser, signInWithGoogle} = useContext(AuthContext);
   const navigate = useNavigate()

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    logInUser(email,password)
    .then((result) => {
      const lastSignInTime =result?.user?.metadata?.lastSignInTime;
      const userInfo ={email,lastSignInTime}
      e.target.reset();
      navigate('/')
      fetch("https://mrs-sports-server.vercel.app/users",{
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(userInfo),
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
       
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
 }

  const handleSignInWithGoogle  = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
       console.log(errorCode, errorMessage)
      });
  }

    return (
        <div>
          
           <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Login Here!</h1>
                <p className="py-6">
                   You can Login Here.
                </p>
                </div>
                <div className="card bg-base-100 w-[1000px] max-w-sm shrink-0 shadow-2xl">
                 <form onSubmit={handleLogIn} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                      <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                          <span className="label-text">Password</span>
                      </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control my-6 gap-3">
                      <button className="btn btn-primary">Login</button>
                      <a onClick={handleSignInWithGoogle} className=' text-base text-center btn btn-success'>LogIn with Google</a>
                    </div>
                    
                    <span className='text-sm'>Create an Account <Link className='text-green-800 font-bold' to="/register" >Register</Link> </span>
                 </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default LogIn;