import React, { FC } from 'react';
import Image from 'next/image';
import { ReadMore } from '../../../assets/svg';
import { blogDataProps } from './types';

interface IBlogPosts {
  data: blogDataProps[];
}

const BlogPosts: FC<IBlogPosts> = ({ data }) => {
  return (
    <div className="flex flex-col sm:gap-[25px] md:gap-[50px]">
      <p className="uppercase text-[23px] font-semibold">Blog</p>
      <div className="flex flex-col xl:flex-row justify-between w-full gap-20 2xl:pr-[5%]">
        <div className="blogWrapper grid grid-cols-1 max-xl:justify-items-center md:grid-cols-2 gap-20">
          {data.map((item: blogDataProps, index: number) => {
            return (
              <div
                className="p-0 flex justify-center flex-col gap-[10px] max-w-[350px] overflow-hidden"
                key={index}
              >
                <div className="relative rounded-lg">
                  <Image
                    src={item.images}
                    alt="img"
                    className="m-0 p-0 w-full"
                  />
                  {/* <div className="absolute bottom-0 w-full">
                    <div className="blogSubWrapper w-full">
                      <div className="flex flex-col items-start justify-start">
                        <p className="text-white font-bold	text-xs uppercase">
                          {item.title}
                        </p>
                        <div className="flex items-baseline gap-[5px]">
                          <p className="text-white">{item.author}</p>
                          <p className="text-[6px] font-thin text-white">
                            {item.date}
                          </p>
                        </div>
                      </div>
                      <div className="w-[56%]">
                        <p className="text-[7px] leading-normal text-white">
                          {item.description}
                        </p>
                      </div>
                      </div>
                      </div> */}
                  <div className='absolute bottom-[4px] gradient-box w-full h-[120px]'>
                    <div className='w-full h-full backdrop-blur-sm rounded-[3px]'></div>
                  </div>
                  <div className="absolute bottom-1 flex items-center p-6 bg-opacity-[0.7] text-white rounded-lg h-[120px]">
                    <div className='w-full mr-2'>
                      <div><p className='text-[10px] font-bold uppercase'>{item.title}</p></div>
                      <div className='flex items-center mt-2'>
                        <p className='text-[8px] font-medium mr-2'>{item.author}</p>
                        <p className='text-[4px] font-medium'>{item.date}</p>
                      </div>
                    </div>
                    <div>
                      <p className='text-[7px] font-medium'>{item.description}</p>
                    </div>
                  </div>
                  
                </div>
                <div className="flex gap-[5px] items-center">
                  <a href={item.link} className="cursor-pointer uppercase text-[#BE5828] font-medium text-[10px]">
                    Read more
                  </a>
                  <ReadMore />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-[50px] max-w-[500px]">
          <div className="flex flex-col gap-[10px]">
            <p className="text-lg text-[#882C00] font-bold	">
            Why has SEC Chairman graded “Crypto” as a “Security”?
            </p>
            <p>
            Abstract The origin of Bitcoin was expected to introduce a new currency in the market–popularly known as cryptocurrency. However, due to the scarcity and high...
            </p>
            <div className="flex gap-[5px] items-center">
              <a href='https://dev.p2epro.site/2022/12/06/leona-lewis-bleeding-love-dj-dark-adrian-funk-remix/' className="uppercase cursor-pointer text-[#BE5828] font-medium text-[10px]">
                Read more
              </a>
              <ReadMore />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-lg text-[#882C00] font-bold	">
            Why is “Blockchain” not “Crypto”? Revisited
            </p>
            <p>
            What is Blockchain? Blockchain can be described as: A Decentralized Storage Technology inspired by Distributed Ledger Technology (DLT) A Peer-to-Peer (P2P) network of nodes or network participants A...
            </p>
            <div className="flex gap-[5px] items-center">
              <a href='https://dev.p2epro.site/2022/12/06/eminem-stronger-than-i-was/' className="uppercase cursor-pointer text-[#BE5828] font-medium text-[10px]">
                Read more
              </a>
              <ReadMore />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-lg text-[#882C00] font-bold	">
            Why has SEC Chairman graded “Crypto” as a “Security”?
            </p>
            <p>
            Abstract The origin of Bitcoin was expected to introduce a new currency in the market–popularly known as cryptocurrency. However, due to the scarcity and high...
            </p>
            <div className="flex gap-[5px] items-center">
              <a href='https://dev.p2epro.site/2022/12/06/leona-lewis-bleeding-love-dj-dark-adrian-funk-remix/' className="uppercase cursor-pointer text-[#BE5828] font-medium text-[10px]">
                Read more
              </a>
              <ReadMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
