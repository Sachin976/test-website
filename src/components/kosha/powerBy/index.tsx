import React, { FC } from 'react';
import { Avatar, Card, Typography } from 'antd';
import { kulptantraDataProps } from './types';

interface IPoweredByKulptantra {
  data: kulptantraDataProps[];
}

const { Text } = Typography;

const PoweredByKulptantra: FC<IPoweredByKulptantra> = ({ data }) => {
  return (
    <div className="flex flex-col lg:gap-[88px] gap-[25px]">
      <Text className="uppercase text-base font-semibold">
        Powered by KilpTuntra
      </Text>
      <div className="flex flex-col gap-[15px] lg:gap-[74px] lg:flex-row w-full">
        <Card className="lg:px-[24px] lg:py-[16px] w-full">
          <div className="flex justify-between">
            {data.map((item: kulptantraDataProps, key: number) => {
              return (
                <Avatar
                  src={item.avatar}
                  key={key}
                  size={{ xs: 50, sm: 60, md: 80, lg: 80, xl: 112, xxl: 112 }}
                />
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PoweredByKulptantra;
