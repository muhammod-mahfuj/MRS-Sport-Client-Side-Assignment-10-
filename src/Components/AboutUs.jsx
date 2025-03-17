import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-4xl py-10 mx-auto p-6 text-center">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-gray-700">
                Welcome to **MRS-Sports**, your go-to destination for high-quality sports equipment! 
                We are passionate about sports and committed to providing the best gear for athletes of all levels. 
            </p>
            <h2 className="text-3xl font-semibold mt-6 mb-4">Our Mission</h2>
            <p className="text-gray-600">
                Our mission is to support athletes by offering durable, affordable, and high-performance sports equipment.
            </p>
            <h2 className="text-3xl font-semibold mt-6 mb-4">Why Choose Us?</h2>
            <ul className="list-disc text-left mx-auto max-w-md text-gray-600 mt-2">
                <li>Top-quality sports gear</li>
                <li>Competitive pricing</li>
                <li>Customer satisfaction guarantee</li>
                <li>Fast and reliable shipping</li>
            </ul>
        </div>
    );
};

export default AboutUs;
