import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div>
      <div className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style={{backgroundImage: `url(https://images.unsplash.com/photo-1625134673337-519d4d10b313?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1838&q=80)`}}>
       <div className="md:w-1/2">
        <p className="font-bold text-sm uppercase">Health Organization</p>
        <p className="text-3xl font-bold">Medicare Plus</p>
        <p className="text-2xl mb-10 leading-none">Dedicated to Discovery. Committed to Care</p>
        <Link to='/contact' className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</Link>
        </div>  
    </div>
    </div>
  );
};

export default Slider;