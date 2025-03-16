import React, { useEffect, useState } from 'react';

const SportsCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('./ProductData.json') 
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className="my-14">
            <h2 className="text-center font-bold text-5xl mb-5">Sports Categories</h2>
            <p className="text-center w-2/3 mx-auto mb-8">
                Explore different sports categories and find the best equipment suited for your needs!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
                {categories.map(category => (
                    <div key={category.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src={category.image} alt={category.name} className="w-full h-45 object-cover rounded-lg" />
                        <h3 className="text-xl font-semibold mt-3">{category.name}</h3>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Explore
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SportsCategory;
