import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import SinglePrice from '../SinglePrice/SinglePrice';

const Price = () => {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    fetch('./price.json')
      .then(res => res.json())
      .then(data => setPrice(data))
  }, [])

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
          <h2 className="text-2xl font-extrabold text-gray-900">Our Best Price</h2>
          <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            {
              price.map(price => <SinglePrice
                key={price._id}
                price={price}
              ></SinglePrice>)
            }
          </section>
        </article>
      </section>
    </div>
  );
};

export default Price;