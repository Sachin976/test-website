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
      <div className="grid justify-items-center md:justify-items-start md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16">
        {list.map((card: any, idx: number) => {
          let css = gridCustomCss(idx + 1);
          return (
            <div key={idx} className='w-[80%]  container'>
            <div
              className={`${
                css ? css : 'lg:justify-self-center'
              } border-style w-full`}
            >
              <div className="flex inner pr-4 pb-4 gap-[20px] w-full rounded-lg">
                <div>
                  <Image width={60} height={60} src={card.image} alt="image" />
                </div>
                <div className="flex flex-col ">
                  <p className="uppercase font-medium text-[15px] my-3">
                    {card.title}
                  </p>
                  <p className="font-light my-3 summary  text-xs opacity-[0.5]">
                    {card.summary?.length > 200
                      ? card.summary?.slice(0, 200) + ' ...'
                      : card.summary}
                  </p>
                  <p className="hidden font-light mt-3 description text-xs opacity-[0.5]">
                    {card.summary}
                  </p>
                </div>
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

