import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'antd';
import logo from '../../../assets/image/kilpTuntra-logo.png';
import kalpText from '../../../assets/image/kalp-text.png';
import { Close, HamburgerMenu } from '../../../assets/svg';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <Fragment>
      <div className="sticky top-6 bg-[#FEF9F2]">
        <nav className="w-full absolute sm:sticky top-0 md:absolute background-transparent z-50 ">
          <div className="grid grid-cols-1 items-baseline md:grid-cols-2 lg:grid-cols-12 xl:grid-cols-6 gap-4">
            <div>
              <div className="flex items-center justify-between p-3 py-3 md:py-5 md:block xl:col-start-1 xl:col-span-1">
                <div className="flex items-center">
                  <Image
                    src={logo}
                    width={34}
                    height={37}
                    alt="kalptantra-logo"
                    className="pr-[5px]"
                  />
                  <Image
                    src={kalpText}
                    width={115}
                    height={14}
                    alt="kalp-text"
                  />
                </div>
                <div className="md:hidden">
                  <button
                    className="p-2 w-9 absolute right-6 top-3 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? <HamburgerMenu /> : <Close />}
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`flex-1 justify-end pb-3 md:block md:pb-0 md:mt-0 md:col-start-3 md:col-span-8  xl:col-start-2 xl:col-span-4  ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center list-none justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 md:list-none xl:list-none break-words">
                <li>
                  <Link href="/">SOLUTIONS</Link>
                </li>
                <li>
                  <Link href="/">ABOUT KLIPTUNTRA</Link>
                </li>
                <li>
                  <Link href="/">COMMUNITY</Link>
                </li>
                <li>
                  <Link href="/">CONTACT US</Link>
                </li>
              </ul>
            </div>
            <div className="flex xl:col-start-6 xl:col-span-1">
              <Button className="w-full lg:w-[233px] m-3 xl:w-[187px] bg-black text-white font-normal">
                #RegulatedByDesign
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
