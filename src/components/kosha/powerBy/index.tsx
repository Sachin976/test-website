import React, { FC } from 'react';
import { Avatar, Card, Typography } from 'antd';
import { kalptantraDataProps } from './types';

interface IPoweredByKalptantra {
  data: kalptantraDataProps[];
}

const { Text } = Typography;

const PoweredByKalptantra: FC<IPoweredByKalptantra> = ({ data }) => {
  return (
    <div className="flex flex-col lg:gap-[70px] gap-[25px]">
      <Text className="uppercase text-[23px] font-semibold">
        Powered by Kalptantra
      </Text>
        <Card className="p-5 box-upper-shadow w-full rounded-xl">
          <div className="grid grid-cols-2 justify-items-center md:grid-cols-4 lg:grid-cols-8  gap-3">
            {data.map((item: kalptantraDataProps, key: number) => {
              return (
                <Avatar
                  className='cursor-pointer'
                  src={item.avatar}
                  key={key}
                  size={90}
                />
              );
            })}
          </div>
        </Card>
    </div>
  );
};

export default PoweredByKalptantra;
