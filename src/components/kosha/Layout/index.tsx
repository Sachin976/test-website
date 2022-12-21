import Footer from '../footer';
import React from 'react';
import HeaderOne from '../headerOne';
import Image from 'next/image';
import circleImage from '../../../assets/image/circleImage.png';

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="relative flex w-full xl:px-[50px] lg:gap-[58px] flex-col bg-transparent">
        <Image
          src={circleImage}
          alt=""
          className="absolute left-[25%] -mt-10 circle-rotate"
        />
        <HeaderOne />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
