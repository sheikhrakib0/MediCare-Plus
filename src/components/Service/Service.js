import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
  // console.log(props.service);
  const { _id, name, picture, balance, doctor } = props.service;
  return (
    <div className='justify-center text-center bg-gray-200 p-2 rounded-xl'>
      <img className='rounded' src={picture} alt="" />
      <h2 className='font-bold text-2xl py-2'>{name}</h2>
      <h3 className='font-semibold'>Starting from: ${balance}</h3>
      <h2 className='font-semibold'>Doctor: {doctor}</h2>
      <Link to={`/servicedetails/${_id}`}>
        <button class="service-button px-6 py-2 rounded font-bold text-xl my-2">
          Details
        </button>
      </Link>
    </div>
  );
};

export default Service;