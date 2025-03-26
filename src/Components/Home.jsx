import React from 'react';
import Landingsec from './Landingsec';
import TransformLife from './TransformLife';
import LifeQue from './LifeQue';
import AdhyatmikQue from './AdhyatmikQue';
import Imagegrid from './Imagegrid';
import Footer from './Footer';
import Ticketscard from './Ticketscard';

function Home() {
  return (
    <>
      <Landingsec />
      <TransformLife />
      <LifeQue />
      <AdhyatmikQue />
      <Imagegrid />
      <Ticketscard />
      <Footer />
    </>
  );
}

export default Home;
