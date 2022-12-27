import React, { FC } from 'react';
import { Avatar, Card, Typography } from 'antd';
import { ecosystemDataProps } from './types';

const { Text } = Typography;
const { Meta } = Card;

interface IFutureCard {
  data: ecosystemDataProps[];
}

const FutureCard: FC<IFutureCard> = ({ data }) => {
  return (
    <div className="flex flex-col lg:gap-[60px] gap-[25px]">
      <Text className="uppercase text-[23px] font-semibold">
        Fueling the Kalptantra Ecosystem:
      </Text>
      <div className="grid bg-transparent md:grid-cols-2 xl:grid-cols-3 gap-[15px] lg:gap-[74px] lg:flex-row w-full">
        {data.map((item: ecosystemDataProps, key: number) => {
          return (
            <Card key={key} className="bg-[#FFFAF3] border-black  border-opacity-[0.5] w-full tile-shadow">
              <Meta
                avatar={
                  <Avatar
                    src={item.avatar}
                    size={{ xs: 32, sm: 32, md: 40, lg: 48, xl: 48, xxl: 48 }}
                  />
                }
                title={<p className='my-0 font-semibold'>{item.title}</p>}
                description={<p className='my-0 text-black text-md font-[300]'>{item.description}</p>}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FutureCard;
