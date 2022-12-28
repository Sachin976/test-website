import React, { FC } from 'react';
import Image from 'next/image';
import { Typography } from 'antd';
import { ReadMore } from '../../../assets/svg';
import { blogDataProps } from './types';

const { Text } = Typography;

interface IBlogPosts {
  data: blogDataProps[];
}

const BlogPosts: FC<IBlogPosts> = ({ data }) => {
  return (
    <div className="flex flex-col sm:gap-[25px] md:gap-[50px]">
      <Text className="uppercase text-[23px] font-semibold">Blog</Text>
      <div className="flex flex-col xl:flex-row justify-between w-full gap-20 2xl:pr-[5%]">
        <div className="blogWrapper grid grid-cols-1 max-xl:justify-items-center md:grid-cols-2 gap-20">
          {data.map((item: blogDataProps, index: number) => {
            return (
              <div
                className="p-0 flex justify-center flex-col gap-[10px] max-w-[350px]"
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
                        <Text className="text-white font-bold	text-xs uppercase">
                          {item.title}
                        </Text>
                        <div className="flex items-baseline gap-[5px]">
                          <Text className="text-white">{item.author}</Text>
                          <Text className="text-[6px] font-thin text-white">
                            {item.date}
                          </Text>
                        </div>
                      </div>
                      <div className="w-[56%]">
                        <Text className="text-[7px] leading-normal text-white">
                          {item.description}
                        </Text>
                      </div> */}
                  <div className="absolute bottom-1 flex p-6 bg-black bg-opacity-[0.7] text-white rounded-lg">
                    <div className='w-full'>
                      <div><p className='text-[10px] font-bold'>{item.title}</p></div>
                      <div className='flex items-center'>
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
                  <Text className="uppercase text-[#BE5828] text-[10px]">
                    Read more
                  </Text>
                  <ReadMore />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-[50px] max-w-[500px]">
          <div className="flex flex-col gap-[10px]">
            <Text className="text-lg text-[#882C00] font-bold	">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s
            </Text>
            <div className="flex gap-[5px] items-center">
              <Text className="uppercase text-[#BE5828] text-[10px]">
                Read more
              </Text>
              <ReadMore />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <Text className="text-lg text-[#882C00] font-bold	">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s
            </Text>
            <div className="flex gap-[5px] items-center">
              <Text className="uppercase text-[#BE5828] text-[10px]">
                Read more
              </Text>
              <ReadMore />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <Text className="text-lg text-[#882C00] font-bold	">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s
            </Text>
            <div className="flex gap-[5px] items-center">
              <Text className="uppercase text-[#BE5828] text-[10px]">
                Read more
              </Text>
              <ReadMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
