import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white rounded-t-xl">
      <div className="bottom-0 w-full flex flex-col md:flex-row px-8 py-2 md:px-14 md:py-4 ">
        <div className="max-w-[350px] md:mr-20 lg:mr-28 mb-10">
          <h2 className="uppercase font-bold">We&#39;ll Keep you posted</h2>
          <p className="text-[#FFFFFF] mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s
          </p>
          <input
            placeholder="Your e-mail address"
            className="p-5 pr-[120px] rounded-md border-0 w-full"
          />
          <button className="uppercase p-3 bg-[#BE5828] text-white font-bold border-0 rounded-md -m-[110px]">
            Subscribe
          </button>
        </div>
        <div className="flex justify-between md:max-w-[600px] max-w-[450px]">
          <div>
            <h5 className="uppercase font-bold">General</h5>
            <ul className="list-none p-0 text-[#FB8E5B] text-sm md:text-lg">
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
            <h5 className="uppercase font-bold">Initiatives</h5>
            <ul className="whitespace-nowrap list-none p-0 text-[#FB8E5B] text-sm md:text-lg">
              <li>Advocate programs</li>
              <li>Compliances</li>
              <li>Sustainability</li>
              <li>Regulatory</li>
            </ul>
          </div>
          <div>
            <h5 className="whitespace-nowrap uppercase md:text-md font-bold">
              Social Media
            </h5>
            <ul className="list-none p-0 text-[#FB8E5B] text-sm md:text-lg">
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
