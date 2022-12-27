import React from 'react';
import { data } from './data';

const PageBriefText = ({ page = '' }: any) => {
  return (
    <div className="grid place-items-center mb-20 px-8 py-2">
      {page == 'home' && <p className='font-bold uppercase text-center text-sm'>{data[page]?.tag1}</p>}
      <h1 className="uppercase text-center mt-2 text-[#BE5828] max-w-[640px]  text-[43px] font-[900]">
        {data[page]?.title}
      </h1>
      {data[page]?.description && <p className="text-center z-[5] font-light text-[#151515] max-w-[580px] opacity-[0.7]">
        {data[page]?.description}
      </p>}
      {page == 'home' && <button className='uppercase z-[4] cursor-pointer mt-10 bg-black text-white font-bold px-4 py-3 border-0  md:shadow-[-60px_75px_80px_200px_rgba(254,249,242)] rounded-xl'>
        explore us more</button>}
    </div>
  );
};

export default PageBriefText;

// 254,249,242