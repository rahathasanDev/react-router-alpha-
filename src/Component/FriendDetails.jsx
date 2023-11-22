import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
  const friend=useLoaderData();
  console.log(friend);
  return (
    <div>
      <h2 className='text-center text-3xl font-bold'>EveryThing about this person is here</h2>
     <div className='mt-12'>
     <h1 className='text-center text-3xl font-serif'>Name:{friend.name}</h1>
      <h2 className='text-center text-3xl font-serif'>Phone:{friend.phone}</h2>
     </div>
    </div>
  );
};

export default FriendDetails;