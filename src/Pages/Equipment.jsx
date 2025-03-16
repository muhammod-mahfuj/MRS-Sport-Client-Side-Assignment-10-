import React from 'react';
import { Link } from 'react-router-dom';

const Equipment = ({equipment}) => {
    const {itemName,description,categoryName,price,
        image,rating,customization,stockStatus, userName,userEmail, _id} = equipment;
        
    return (
        <div>
            <div className="overflow-x-auto my-10 mx-auto w-[700px]">
             <table className="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={image}
                                                alt="Device Picture" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{itemName}</div>
                                        <div className="text-sm opacity-50 w-[150px]">{description}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {categoryName}
                            </td>
                            <td>
                                {price}
                            </td>
                        <th>
                           <Link to={_id} className="btn btn-ghost btn-xs">Details</Link>
                        </th>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
    );
};

export default Equipment;