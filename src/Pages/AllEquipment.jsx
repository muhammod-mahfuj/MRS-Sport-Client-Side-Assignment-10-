import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Equipment from './Equipment';

const AllEquipment = () => {
    const equipmentDatas = useLoaderData();

    
    return (
        <div className='text-center my-10 mx-10'>
            <h3 className='font-extrabold text-3xl'>All Equipment : {equipmentDatas.length}</h3>
            {
                equipmentDatas.map(equipment => <Equipment key={equipment._id} equipment={equipment}>

                </Equipment>)

            }
        </div>
    );
};

export default AllEquipment;