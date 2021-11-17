import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const ServiceDetails = () => {
  const [service, setService] = useState();
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/servicedetails/${id}`)
    .then(res=>res.json())
    .then(data=>setService(data))
},[])
  return (
    <div className='container' style={{height: '500px'}}>
      <h2 className="text-4xl pt-4">This is service detials with id:  {id}</h2>
      <h2>This data is not from a real api , that's why single item's data can't be loaded</h2>
      <h3>Name: {service?.price}</h3>
    </div>
  );
};

export default ServiceDetails;