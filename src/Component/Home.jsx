import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';


const Home = () => {
  return (
    <div>
      
     <Header></Header>
      <h4 className='text-center text-3xl font-bold'></h4>
      <Outlet></Outlet>
      
    </div>
  );
};

export default Home;