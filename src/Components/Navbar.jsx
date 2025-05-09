import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {

    const {user, signOutUser} =  useContext(AuthContext);
    console.log(user)

    const handleSignOut = (e) => {
        e.preventDefault();

        signOutUser()
        .then(() => {
            console.log("SignOUt Successfully")
          }).catch((error) => {
            console.log('error', error.message)
          });
    }
    
   
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                    <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <Link to="/">Home</Link>
                    <Link to="/home/addequipment">Add Equipment</Link>
                    <Link to="/home/allequipment">
                        All Equipment
                    </Link>
                    <Link to="/home/mylist">My Equipment List</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" href='/'>MRS Sports</a>
            </div>
            <div className="navbar-center hidden lg:flex">
             <ul className="menu menu-horizontal px-1 gap-5">
                <Link to="/">Home</Link>
                <Link to="/home/addequipment">Add Equipment</Link>
                <Link to="/home/allequipment">
                   All Equipment 
                </Link>
                <Link to="/home/mylist">My Equipment List</Link>
             </ul>
            </div>
            <div className="navbar-end gap-3">
           
                {
                    user ? <>
                        <img src={user?.photoURL} alt={user?.displayName} />
                        <a className='btn' onClick={handleSignOut}>Log Out</a>
                    </> 
                    : <> 
                        <Link to='/home/login' className="btn">LogIn</Link>
                        <Link to='/home/register' className="btn">Register</Link>
                    </>
                }
              
            </div>
      </div>
    );
};

export default Navbar;