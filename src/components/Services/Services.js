import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='mb-4'>
            <h2 className='text-2xl font-bold text-center uppercase p-4 text-blue-600'>Our Services</h2>
            <div className='container mx-auto grid grid-cols-2 gap-4 md:grid-cols-3'>
            
            {
                services.map(service => <Service
                key={service._id}
                service = {service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;