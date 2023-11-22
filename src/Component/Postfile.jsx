import React from 'react';

// in this 4 number line be careful rahat because you mistakes so much in this line .....specially in curly bracket

const Postfile = ({post}) => {
  const {id,title ,body}=post;
  return (
   <div className=''>
     <div className='text-center font-mono text-2xl box-border  p-4 mt-2 border-4 rounded-lg  '>
      <h3>Id:{id}</h3>
      <h3>Title:{title}</h3>
      <h3>{body}</h3>
       <button className='border border-solid border-gray-800  hover:bg-red-500 hover:underline rounded-lg p-2'>Show more</button>
    </div>
   </div>
  );
};

export default Postfile;