import React from 'react';
import Image from 'next/image';

export const EventCard = ({ value, id }: any) => {
  return (
    <div
      key={id}
      className="flex w-full md:max-w-3/6 justify-between items-center mb-5"
    >
      <div className="flex p-8 justify-start w-full md:w-4/6 md:max-w-[600px] items-center border-solid border-[1px] border-opacity-[0.5] border-black rounded-lg">
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
        <div className="hidden ml-2">
          <p>{value?.description}</p>
        </div>
      </div>
      <span className="hover-text hidden md:block mx-5 uppercase opacity-[0.3] whitespace-nowrap">
        HOVER FOR MORE
      </span>
    </div>
  );
};
export default EventCard;
