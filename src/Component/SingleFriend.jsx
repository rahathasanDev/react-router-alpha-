import React from 'react';
import { Link } from 'react-router-dom';

const SingleFriend = ({ friend }) => {
  console.log(friend);
  const { email, name, id, phone } = friend;
  return (
    <div className='flex items-center justify-center text-center'>
      <div className='text-center  font-semibold text-2xl  h-3/4 w-2/4  p-4 mt-2 border-2 rounded-lg  border-solid border-violet-800 '>
        <h3>{name}</h3>
        <p>email:{email}</p>
        <p>phone:{phone}</p>
        <p>ID NO:{id}</p>

        <p className='hover:bg-lime-200   hover:underline box-border  border-2 rounded-lg'>
          <Link to={`/friend/${id}`}>Show me details</Link></p>



      </div>
    </div>
  );
};

export default SingleFriend;