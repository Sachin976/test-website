import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white rounded-t-xl">
      <div className="bottom-0 w-full flex flex-col md:flex-row px-8 py-8 md:px-14 md:py-14 ">
        <div className="max-w-[360px] md:mr-20 lg:mr-28 mb-10">
          <h2 className="uppercase adca-font m-0 font-normal mb-8 text-[30px]">We&#39;ll Keep you posted</h2>
          <p className="text-[#FFFFFF] text-[17px] mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s
          </p>
          <input
            placeholder="Your e-mail address"
            className="p-[21px] pt-[18px] pr-[120px] text-lg font-light placeholder:opacity-[0.9] rounded-lg border-0 w-full"
          />
          <button className="cursor-pointer text-[14px] uppercase adca-font px-5 py-4  bg-[#BE5828] text-white border-0 rounded-md -ml-[120px]">
            Subscribe
          </button>
        </div>
        <div className="flex justify-between md:max-w-[600px] max-w-[450px]">
          <div>
            <h5 className="uppercase adca-font font-normal md:text-[14px] m-0">General</h5>
            <ul className="list-none p-0 text-[#FB8E5B]  ">
              <li>About</li>
              <li>Demo</li>
              <li>Roadmap</li>
              <li>FAQs</li>
              <li>Build</li>
              <li>Careers</li>
              <li>Team</li>
            </ul>
          </div>
          <div className="mx-4 lg:mx-[100px]">
            <h5 className="uppercase adca-font font-normal md:text-[14px] m-0">Initiatives</h5>
            <ul className="whitespace-nowrap list-none p-0 text-[#FB8E5B] ">
              <li>Advocate programs</li>
              <li>Compliances</li>
              <li>Sustainability</li>
              <li>Regulatory</li>
            </ul>
          </div>
          <div>
            <h5 className="whitespace-nowrap adca-font uppercase font-normal md:text-[14px] m-0">
              Social Media
            </h5>
            <ul className="list-none p-0 text-[#FB8E5B] ">
              <li>Linkedin</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
