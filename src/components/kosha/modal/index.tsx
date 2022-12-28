import React from 'react';
import { GrClose } from 'react-icons/gr';
import Image from 'next/image';

export default function Modal({
  title = 'kalp',
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  toggel,
}: any) {
  return (
    <>
      <div className="w-full h-[100vh] fixed z-[90] bg-black bg-opacity-[0.8] flex place-items-center justify-center">
        <div className=" bg-white w-[500px] h-fit rounded-md p-10 flex flex-col gap-y-5">
          <div className="flex justify-between">
            <div className="flex gap-[20px] place-items-center">
              <Image
                width={98}
                height={98}
                src="/assets/about/1.jpg"
                alt="BLACK"
                className="rounded-lg"
              />
              <p className="uppercase text-[#BE5828] font-[800] text-[31px] ">
                {title}
              </p>
            </div>
            <div>
              <button onClick={()=>toggel()} className="cursor-pointer border-none bg-white w-[20px] h-[20px] text-xl font-[600] rounded-lg opacity-50">
                <GrClose />
              </button>
            </div>
          </div>
          <div>
            <p className="text-[#BE5828] text-[23px]">{description}</p>
          </div>
          <div className="p-10%">
            <Image
              width={500}
              height={300}
              src="/assets/Rectangle.png"
              alt="image"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
