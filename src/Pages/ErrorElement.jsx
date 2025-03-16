import React from 'react';

const ErrorElement = () => {
    return (
        <div className='font-bold text-center my-10 text-3xl'>
            <h3 className='text-red-800 text-6xl'> NOT FOUND </h3>
            <p className='text-orange-700 mt-5'>The path is incorrect, please try again</p>
        </div>
    );
};

export default ErrorElement;