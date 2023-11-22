import React from 'react';

const SingleFriend = ({friend}) => {
  console.log(friend);
  const {email,name,id,phone}=friend;
  return (
   <div className='flex items-center justify-center text-center'>
     <div className='text-center  font-semibold text-2xl box-border h-64 w-2/4  p-4 mt-3 border-4 rounded-lg '>
      <h3>{name}</h3>
      <p>email:{email}</p>
      <p>phone:{phone}</p>
      <p>ID NO:{id}</p>
    </div>
   </div>
  );
};

export default SingleFriend;