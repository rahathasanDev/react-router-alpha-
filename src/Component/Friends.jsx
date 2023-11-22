import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
  const data =useLoaderData();
  console.log(data);
  return (
    <div>
      <h2 className='text-center fond-bold text-4xl '>You are my friends</h2>
    </div>
  );
};

export default Friends;