import Footer from '../footer';
import React from 'react';
import HeaderOne from '../headerOne';
import Image from 'next/image';
import circleImage from '../../../assets/image/circleImage.png';

const Layout = ({ children }: any) => {
  return (
    <>
      <Image
        src={circleImage}
        alt=""
        className="absolute left-[25%] -mt-10 circle-rotate"
      />
      <HeaderOne page="home" />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
