import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Postfile from './Postfile';

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div className=''>
      <h4 className='text-center text-3xl font-serif '>All Posts Are Here:{posts.length}</h4>
      <div className=''>
        {
         posts.map(post=><Postfile
         key={post.id}
         post={post}></Postfile>)
        }
      </div>
    </div>
  );
};

export default Posts;