import React from 'react';
import Image from 'next/image';

export const EventCard = ({ value, id }: any) => {
  return (
    <div className='event-container w-[90%] min-h-[150px]'>
    <div
      key={id}
      className="flex w-full event-style justify-start items-center mb-5"
    >
      <div className="flex p-8 inner-box justify-start w-full md:w-4/6  items-center border-solid border-[1px] border-opacity-[0.5] border-black rounded-lg">
        <Image
          width={55}
          height={55}
          src="/assets/kalptantra-bg-black.png"
          alt="Kalptantra logo"
        />
        <div className="ml-6">
          <span className="text-[#BE5828] text-md font-semibold">
            {value?.heading}
          </span>
          {!value?.online && (
            <p className="text-xs mt-2">{value?.subHeading}</p>
          )}
          {value?.online && (
            <ul className="text-[#00B05C] pl-6 text-xs">
              <li>Online now</li>
            </ul>
          )}
        </div>{' '}
        <div className="hidden description text-[10px] ml-4">
          <ul><li>{value?.description}</li></ul>
        </div>
      </div>
      <span className="hover-text hidden md:block mx-5 uppercase opacity-[0.3] whitespace-nowrap">
        HOVER FOR MORE
      </span>
    </div>
    </div>
  );
};
export default EventCard;
