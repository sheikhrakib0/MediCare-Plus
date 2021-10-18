import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
  const {id} = useParams()
  return (
    <div>
      this is service detials {id}
    </div>
  );
};

export default ServiceDetails;