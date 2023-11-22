import React from 'react';
import { Link } from 'react-router-dom';
import Friends from './Friends';

const Header = () => {
  return (
    <div className='font-semibold p-4 m-4 space-x-3 text-2xl bg-slate-500 width-full  text-center  hover:bg-lime-500 hover:underline'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/friends">Friends</Link>
      
    </div>
  );
};

export default Header;