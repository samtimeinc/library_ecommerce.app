import React from 'react';
import Landing from '../Components/Landing';
import Highlights from '../Components/Highlights';
import Features from '../Components/Features';
import Discounted from '../Components/Discounted';
import Explore from '../Components/Explore';

const Home = () => {
  return (
    <>
        <Landing />  
        <Highlights />    
        <Features />
        <Discounted />
        <Explore />
    </>
  );
};

export default Home;