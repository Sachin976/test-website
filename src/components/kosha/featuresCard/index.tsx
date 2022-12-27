import React, { Fragment } from 'react';
import { list } from './data';
import { gridCustomCss } from '../../../helpers/commonFunction';
import Image from 'next/image';
 
const FeaturesCard = () => {
  return (
    <Fragment>
      <div>
        <p className="uppercase mt-6 font-[600] text-[23px]  mb-20">Key Features</p>
      </div>
      <div className="grid justify-items-center md:justify-items-start md:grid-cols-2 lg:grid-cols-3 gap-10">
        {list.map((card: any, idx: number) => {
          let css = gridCustomCss(idx + 1);
          return (
            <div
              className={`${
                css ? css : 'lg:justify-self-center'
              }  relative z-1 w-[80%]`}
            >
              <div className="flex border-hover gap-[20px] w-full rounded-lg">
                <div>
                  <Image width={60} height={60} src={card.image} alt="image" />
                </div>
                <div className="flex flex-col ">
                  <p className="uppercase font-medium text-[15px]">
                    {card.title}
                  </p>
                  <p className="font-[300] summary text-sm opacity-[0.5]">
                    {card.summary?.length > 200
                      ? card.summary?.slice(0, 200) + ' ...'
                      : card.summary}
                  </p>
                  <p className="hidden font-[300] description text-sm opacity-[0.5]">
                    {card.summary}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default FeaturesCard;

