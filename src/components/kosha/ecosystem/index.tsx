import React, { FC } from 'react';
import { Avatar } from 'antd';
import { ecosystemDataProps } from './types';

interface IFutureCard {
  data: ecosystemDataProps[];
}

const FutureCard: FC<IFutureCard> = ({ data }) => {
  return (
    <div className="flex flex-col lg:gap-[60px] gap-[25px]">
      <p className="uppercase text-[23px] font-semibold">
        Fueling the Kalptantra Ecosystem:
      </p>
      <div className="grid bg-transparent md:grid-cols-2  gap-[15px] lg:gap-[74px] lg:flex-row w-full">
        {data.map((item: ecosystemDataProps, key: number) => {
          return (
            <div key={key} className='flex border-solid border-black border-[1px] border-opacity-[0.4] p-5 items-start rounded-xl tile-shadow'>
              <div className='mr-4'>
                <Avatar
                  src={item.avatar}
                  size={50}
                />
              </div>
              <div>
                <p className='text-md font-medium mb-1'>{item.title}</p>
                <p className='text-sm font-light leading-[1.3]'>{item.description.slice(0,280)}</p>
              </div>
              {/* <Card key={key} className="bg-[#FFFAF3] border-black  border-opacity-[0.5] w-full tile-shadow">
              <Meta
                avatar={
                }
                title={<p className='my-0 font-semibold'>{item.title}</p>}
                description={<p className='my-0 text-black text-md font-[300]'>{item.description}</p>}
              />
            </Card> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FutureCard;
