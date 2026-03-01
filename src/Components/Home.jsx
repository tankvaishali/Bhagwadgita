import React from 'react';
import Landingsec from './Landingsec';
import TransformLife from './TransformLife';
import LifeQue from './LifeQue';
import AdhyatmikQue from './AdhyatmikQue';
import Imagegrid from './Imagegrid';
import Footer from './Footer';
import Ticketscard from './Ticketscard';
// import QrCodegen from './QrCodegen';

function Home() {
  return (
    <>
      {/* <QrCodegen />  //QR GENERATE CODE*/}
      <Landingsec />
      <Ticketscard />
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
