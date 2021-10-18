import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../img/404.jpg';

const NotFound = () => {
    return (
        <div className='flex flex-col'>
            <img className='w-9/12 mx-auto' src={notfound} alt="" />
            <Link to='/home' className='text-center'>
                <button className='bg-gray-600 px-4 py-2 rounded'>Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;