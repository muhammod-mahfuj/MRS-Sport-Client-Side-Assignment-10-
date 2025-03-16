import React from 'react';
import './Root.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
      <>
        <Navbar></Navbar>
          <Outlet></Outlet>
        <Footer></Footer>
      </>
    );
};

export default Home;