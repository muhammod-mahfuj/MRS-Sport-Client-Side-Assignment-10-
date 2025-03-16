import React from 'react';
import img1 from '../assets/vecteezy_colorful-collection-of-various-sports-balls-and-equipment-on_56527652.jpeg'
import img2 from '../assets/vecteezy_man-tying-running-shoes-getting-ready-for-run-healthy_1226712.jpg'
import img3 from '../assets/vecteezy_sport-equipment-on-green-grass-football-soccer_25501404.jpg'

const Banner = () => {
    return (
        <div className="max-w-screen h-[70vh]  overflow-hidden relative">
            <div className="carousel w-full  h-full">
                <div id="slide1" className="carousel-item relative w-full h-full">
                    <img src={img1} className="w-full h-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-full">
                    <img src={img2} className="w-full h-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-full">
                    <img src={img3} className="w-full h-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            
            <div className='absolute top-1/2 left-20 transform -translate-y-1/2'>
                <h2 className='font-bold text-5xl md:text-6xl lg:text-7xl'>
                    <span className='text-white'>W</span>elc<span className='text-white'>o</span>me t<span className='text-white'>o</span> <br />
                    <span className='text-8xl my-5'>
                        M<span className='text-white'>R</span>S <span className='text-white'>S</span>
                        <span className='text-6xl'>port<span className='text-white'>s</span></span>
                    </span>
                </h2>
                <p className='font-semibold text-lg md:text-xl my-8'>
                    Gear Up with High-Quality Sports Equipment, <br /> Apparel & Accessories for Every Athlete!
                </p>
            </div>
        </div>
    );
};

export default Banner;
