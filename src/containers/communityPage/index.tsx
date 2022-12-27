import React from 'react';
import { socialMedia, data, ongoing, upcoming } from './data';
import sharePng from '../../assets/icons/share.png';
import smiley from '../../assets/icons/smiley.png';
import HeaderOne from '../../components/kosha/headerOne';
import BackgroundImage from '../../components/kosha/backgroundImage';
import PageBriefText from '../../components/kosha/pageBriefText';
import Footer from '../../components/kosha/footer';
import Image from 'next/image';
import { gridCustomCss } from '../../helpers/commonFunction';
import EventCard from '../../components/kosha/eventCard';
import { IoSendSharp } from 'react-icons/io5';

const CommunityPage = () => {
  return (
    <div>
      <BackgroundImage />
      <HeaderOne page="community"/>

      <PageBriefText page="community" />

      <main className="px-8 md:px-14 pb-10">
        <h3 className="text-[23px]">{data.socialTitle}</h3>
        <div className="grid max-md:justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 pt-8">
          {socialMedia.map((media, idx) => {
            let css = gridCustomCss(idx + 1);
            return (
              <div
                key={idx}
                className={`${
                  css ? css : 'lg:justify-self-center'
                } relative flex max-w-[265px]`}
              >
                <div className="grid place-items-center bg-white  mr-5  shadow-[0_16px_20px_-20px_rgba(0,0,0,0.4)] min-h-[100px] min-w-[100px]  rounded-lg">
                  <Image
                    height={media.name == 'facebook' ? 66 : 36}
                    width={media.name == 'facebook' ? 80 : 40}
                    src={media.image}
                    alt="twitter"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="uppercase font-semibold text-[17px] mb-5">
                    {media.action}{' '}
                    <span className={media.name}>{media.name}</span>
                  </p>
                  <button
                    onClick={() => window.open(media.url, '_blank')}
                    className={`${media.name}-button cursor-pointer uppercase border-0 rounded-lg text-[14px] text-white w-full font-bold p-2 shadow-[0_16px_20px_-13px_rgba(0,0,0,0.4)]`}
                  >
                    open {media.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="uppercase pt-10 pb-5 text-[23px]">{data.event}</h3>
        <div className="flex flex-col items-center lg:flex-row w-full">
          <div className="lg:w-3/6 max-w-full min-w-[250px] border-solid border-0 lg:border-r-[1px] border-opacity-[0.3] border-black">
            <p className="uppercase font-medium text-center mb-4">
              {data.ongoing}
            </p>
            {ongoing.map((value, idx) => (
              <EventCard key={idx+214} value={value} id={idx} />
            ))}
          </div>
          <div className="lg:pl-10 max-w-full min-w-[250px] lg:w-3/6 mt-10 md:mt-0">
            <p className="uppercase font-medium text-center mb-5">
              {data.upcoming}
            </p>
            {upcoming.map((value, idx) => (
              <EventCard key={idx +2} value={value} id={idx} />
            ))}
          </div>
        </div>
        <h3 className="uppercase text-[23px] pt-10 pb-5">
          {data.chatBoxAndFeed}
        </h3>
        <div className="mb-20">
          <div className="flex flex-col lg:items-center lg:flex-row gap-[10%]">
            <div className="flex flex-col md:flex-row lg:w-[50%] mr-6  items-center">
              <div className=" relative flex flex-col md:flex-row max-w-[800px]">
                <div className="bg-white w-[60px] h-[50px] rounded-[50%] sm:mr-5 grid place-items-center p-2 mb-4">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/kalptantra-logo.png"
                    alt="Kalptantra logo"
                  />
                </div>
                <div>
                  <p className="inline mr-1 font-bold">Kalptantra</p>
                  <Image
                    height={15}
                    width={15}
                    className="align-middle"
                    src="/assets/verify.svg"
                    alt="verify tag"
                  />
                  <div className="mt-5 p-3 border-solid border-[1px] border-black border-opacity-[0.3] bg-white rounded-lg">
                    <span className="opacity-[0.5] font-medium">Reposted</span>
                    <p className="my-2 font-medium max-w-[92%]">
                      {data.description}
                    </p>
                    <span className="text-[#BE5828] font-medium">
                      Read more
                    </span>
                    <Image
                      width={200}
                      height={200}
                      className="block my-2 w-[70%] max-w-[400px]"
                      src="/assets/Rectangle.png"
                      alt="rectangle"
                    />
                    <p className="font-medium mb-0">Video title</p>
                    <Image
                      width={50}
                      height={12}
                      src="/assets/youtube-logo.png"
                      alt="youtube logo"
                    />
                  </div>
                  <div className="flex justify-between pt-3">
                    <div className="flex justify-between w-[100px]">
                      <div className="flex items-center ">
                        <span className="mr-2 opacity-[0.7]">13</span>
                        <Image
                          width={20}
                          height={20}
                          src="/assets/chat-icons/comment.png"
                          alt="commment"
                        />
                      </div>
                      <div className="flex items-center ">
                        <span className="mr-2 opacity-[0.7]">56</span>
                        <Image
                          width={20}
                          height={20}
                          src="/assets/chat-icons/loop.png"
                          alt="commment"
                        />
                      </div>
                    </div>
                    <div className="bg-[#FADDCB] flex items-center h-[25.25px] rounded-lg text-center p-2">
                      <span className="mr-2">34</span>
                      <Image
                        width={20}
                        height={20}
                        src="/assets/chat-icons/up.png"
                        alt="commment"
                        className="w-[15px] h-[13px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#BE5828] mt-3 md:mt-0 mx-2 grid place-items-center max-w-[40px] p-2 rounded-xl">
                  <Image height={20} width={20} src={sharePng} alt="share" />
                </div>
              </div>
            </div>
            <div className=" lg:w-[50%]">
              <div className="h-[500px] w-80% lg:w-[400px] xl:w-[600px] mt-20 lg:mt-0 bg-black rounded-lg p-[10px] flex  flex-col justify-between ">
                <div className="bg-[#BE5828] text-white font-[400] text-[24px] px-[4%] py-[1%] rounded-lg">
                  Online Chat
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Type your message"
                    className="rounded-lg w-[100%] px-[10px] pr-[70px] h-[52px] bottom-0"
                  />
                  <button className="absolute right-10 top-4 border-0 bg-white ">
                    <Image height={20} width={20} src={smiley} alt="share" />
                  </button>
                  <button className="absolute right-2 top-4 border-0 bg-white ">
                    <IoSendSharp size={21} className="text-[#BE5828]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
