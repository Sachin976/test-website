import Footer from '../footer';
import React from 'react';
import HeaderOne from '../headerOne';
import Image from 'next/image';
import circleImage from '../../../assets/image/circleImage.png';
import outerCircle from '../../../assets/image/outer-circle.svg';

const Layout = ({ children }: any) => {
  return (
    <>
      <Image src={outerCircle} alt="" className="outer-circle max-xl:hidden " />
      <Image src={circleImage} alt="" className="-mt-[4rem] circle-rotate max-md:hidden" />
      <HeaderOne page="home" />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
