import React from 'react';
import { GrClose } from 'react-icons/gr';
import Image from 'next/image';

export default function Modal({modalData,toggle}: any) {
  return (
    <>
      <div className="w-full h-[100vh] fixed z-[90] bg-black bg-opacity-[0.8] flex place-items-center justify-center">
        <div className=" bg-white w-[80%] md:w-[60%] lg:w-[40%] max-h-[80vh] modal rounded-md p-6 md:p-10 flex flex-col gap-y-8 overflow-y-auto">
          <div className="flex justify-between">
            <div className="flex gap-[20px] place-items-center">
              <Image
                width={98}
                height={98}
                src="/assets/about/1.jpg"
                alt="BLACK"
                className="rounded-lg"
              />
              <p className="uppercase text-[#BE5828] font-[800] md:text-[31px] text-[24px]">
                {modalData?.title}
              </p>
            </div>
            <div>
              <button onClick={()=>toggle()} className="cursor-pointer border-none bg-white w-[20px] h-[20px] text-xl font-[600] rounded-lg opacity-50">
                <GrClose />
              </button>
            </div>
          </div>
          <div>
            <p className="text-[#BE5828]  text-[18px] md:text-[23px]" dangerouslySetInnerHTML={{__html:modalData?.description}}></p>
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
