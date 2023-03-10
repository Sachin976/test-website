import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { IoMenuOutline, IoClose } from 'react-icons/io5';
import Image from 'next/image';
const HeaderOne = ({page}:any) => {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  return (
    <header className="flex">
      <div className="w-full z-[12] lg:px-14 bg-white lg:bg-opacity-0 relative py-5 lg:py-10 mb-10 md:mb-[3.0rem]">
        <div
          className={`${
            showMobileDropdown && 'border-below pb-4 bottom-shadow'} lg:shadow-none relative z-[12] flex justify-between items-center px-8 md:max-lg:px-14 lg:px-0`}
        >
          <div className="flex items-center">
            <Image
              width={25}
              height={25}
              className="mr-2"
              src="/assets/kalptantra-logo.png"
              alt="Kalptantra logo"
            />
            <Link href="/">
              <Image
                width={120}
                height={15}
                className="cursor-pointer"
                src="/assets/kalptantra.png"
                alt="Kalptantra text"
              />
            </Link>
          </div>
          <div className="hidden lg:block ml-[1.5rem]">
            <Link href="/solution">
              <span className={`uppercase ${page == 'solution'?'active-link':'font-semibold'} text-sm mx-3`}>
                Solutions
              </span>
            </Link>
            <Link href="/about">
              <span className={`uppercase ${page == 'about'?'active-link':'font-semibold'} text-sm mx-3`}>
                About kalptantra
              </span>
            </Link>
            <Link href="/community">
              <span className={`uppercase ${page == 'community'?'active-link':'font-semibold'} text-sm mx-3`}>
                Community
              </span>
            </Link>
            <Link href="/contact">
              <span className={`uppercase ${page == 'contact'?'active-link':'font-semibold'} text-sm mx-3`}>
                Contact us
              </span>
            </Link>
          </div>
          <button className="hidden adca-font font-normal text-[14px] lg:block cursor-pointer bg-black text-white px-6 py-3 border-0 button-shadow rounded-xl">
            #RegulatedByDesign
          </button>
          <Button
            onClick={() => setShowMobileDropdown(!showMobileDropdown)}
            className="lg:hidden shadow-none border-0 -mt-1 -mr-4 active:touch-none"
          >
            {showMobileDropdown ? (
              <IoClose size={28} />
            ) : (
              <IoMenuOutline size={28} />
            )}
          </Button>
        </div>
        {showMobileDropdown && (
          <div className="lg:hidden w-[100%] absolute z-[11] left-0 px-14 md:px-20 bg-white flex flex-col">
            <Link className="border-below py-2" href="/solution">
              <span className="uppercase font-semibold text-sm lg:mx-4 ">
                Solutions
              </span>
            </Link>
            <Link className="border-below py-2" href="/about">
              <span className="uppercase font-semibold text-sm lg:mx-4">
                About kalptantra
              </span>
            </Link>
            <Link className="border-below py-2" href="/community">
              <span className="uppercase font-semibold text-sm lg:mx-4">
                Community
              </span>
            </Link>
            <Link className="border-below py-2" href="/contact">
              <span className="uppercase font-semibold text-sm lg:mx-4">
                Contact us
              </span>
            </Link>
            <div className="flex justify-center">
              <button className="lg:hidden max-w-[200px] adca-font cursor-pointer bottom-shadow bg-black text-white font-bold px-4 py-3 my-4 border-0 rounded-xl">
                #RegulatedByDesign
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderOne;
