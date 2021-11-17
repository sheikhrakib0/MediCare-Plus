import React from 'react';
import { Link } from 'react-router-dom';

const SinglePrice = (props) => {
  const { name, price, popularity, picture } = props.price;
  return (
    <div>
      <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
        style={{ backgroundImage: `url(${picture})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
          <div className="text-center">
            <h3 className='text-white text-xl font-bold'>${price}</h3>
            <h3 className="text-white text-2xl font-bold text-center">
              {name}
            </h3>
            <p className='text-white'>Reviews: {popularity}</p>
            <Link to="/*">
            <button
                    data-modal-toggle="example2"
                    data-modal-action="open"
                    className="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
                >
                    Book Now
                </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SinglePrice;