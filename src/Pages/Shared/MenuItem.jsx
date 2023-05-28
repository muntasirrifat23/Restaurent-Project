import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div className='flex mx-auto flex justify-center'>
            <div>
                <img src={image} className="w-[100px]" style={{borderRadius:'0px 200px 200px 200px'}}></img>
            </div>
            <div className='mr-3 ml-3 w-6/12'>
                <h2 className='text-2xl mb-3'>{name}------------</h2>
                <p>{recipe}</p>
            </div>
            <p className='text-red-600 mr-0'>${price}</p>


        </div>
    );
};

export default MenuItem;