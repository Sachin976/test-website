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
    <div className="flex flex-col lg:gap-[88px] gap-[25px]">
      <Text className="uppercase text-base font-semibold">
        Fueling the KilpTuntra Ecosystem:
      </Text>
      <div className="flex flex-col gap-[15px] lg:gap-[74px] lg:flex-row w-full">
        {data.map((item: ecosystemDataProps, key: number) => {
          return (
            <Card key={key} className="bg-transparent border-stone-500 w-full">
              <Meta
                avatar={
                  <Avatar
                    src={item.avatar}
                    size={{ xs: 32, sm: 32, md: 40, lg: 48, xl: 48, xxl: 48 }}
                  />
                }
                title={item.title}
                description={item.description}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FutureCard;
