import React from 'react';

const Header = () => {
  return (
    <div className='font-semibold p-4 m-4 space-x-3 text-2xl  text-center'>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Header;