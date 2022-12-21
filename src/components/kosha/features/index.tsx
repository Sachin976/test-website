import React, { FC, Fragment } from 'react';
import { Typography, Row, Col } from 'antd';
import Image from 'next/image';
import feature from '../../../assets/image/feature.jpeg';
import { keyFeatureDataProps } from './types';

interface IKeyFeatures {
  data: keyFeatureDataProps[];
}

const { Text } = Typography;

const KeyFeatures: FC<IKeyFeatures> = ({ data }) => {
  return (
    <Fragment>
      <div className="pt-4 pl-3 px-[25px]">
        <Text className="uppercase text-base font-semibold">KEY FEATURES</Text>
        <div className="pt-4 lg:pt-[35px] lg:pl-[30px] pl-3 md:gap-0 xl:gap-[50px] grid md:grid-cols-2 lg:grid-cols-3">
          {data?.map((item: keyFeatureDataProps, index: number) => (
            <Row key={index}>
              <Col
                span={18}
                push={3}
                className="pl-9 pb-10 lg:pl-[35px] sm:pt-3 xl:pl-5"
              >
                <Text className="uppercase mt-[15px] xl:w-[50%] custom-title text-base font-medium">
                  {item.title}
                </Text>
                <Typography className="mt-[20px] font-light font-sans text-base text-black opacity-50">
                  {item.detailedExplanation}
                </Typography>
              </Col>
              <Col span={3} pull={18}>
                <Image
                  src={feature}
                  width={35}
                  height={35}
                  alt="feature-img"
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default KeyFeatures;
