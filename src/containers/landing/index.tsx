import React from 'react';
import BlogPosts from '../../components/kosha/blog';
import PoweredByKalptantra from '../../components/kosha/powerBy';
import Layout from '../../components/kosha/Layout';
import FutureCard from '../../components/kosha/ecosystem';
import { BlogCardData } from '../../components/kosha/blog/data';
import { KalpTuntraData } from '../../components/kosha/powerBy/data';
import { FutureCardData } from '../../components/kosha/ecosystem/data';
import PageBriefText from '../../components/kosha/pageBriefText';
import FeaturesCard from '../../components/kosha/featuresCard';


const Landing = () => {
  return (
    <Layout>
      <div className="flex items-center bg-[#FEF9F2] flex-col px-8 md:px-14 overflow-auto">
        {/* <div className="imageMask">
          <LandingSvg />
        </div> */}
        <PageBriefText page='home'/>
        {/* <div className="absolute flex flex-col justify-end items-center h-2/4 lg:h-3/6 xl:h-3/6 xl:w-7/12 2xl:h-3/6 md:h-3/6 md:w-[64%] lg:w-[70%] text-center">
          <Text className="font-bold text-xs lg:text-sm uppercase">
            The most compliant blockchain in the world
          </Text>
          <h1 className="text-[#BE5828] font-black lg:w-3/5 text-[32px] m-5 lg:text-[42px]">
            HELPING THE WORLD TRUST WEB3
          </h1>
          <Text className="text-xs w-4/5 lg:w-3/5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            ever ever since the 1500s
          </Text>
          <Button className="w-[233px] m-3 xl:w-[187px] mt-12 bg-black text-white font-normal">
            EXPLORE US MORE
          </Button>
        </div> */}
        {/* <div className="px-[10px] lg:px-[50px] ">
          <KeyFeatures data={keyFeatureData} />
        </div> */}
        <div className="relative bg-[#FFFAF3] mt-4 z-20 mb-[5vh] md:mb-[10vh]">
          <FeaturesCard />
        </div>
        <div className="flex w-full mt-[20px] lg:gap-[58px] flex-col">
          <FutureCard data={FutureCardData} />
        </div>
        <div className="flex w-full mt-[20px] lg:mt-[88px] flex-col">
          <PoweredByKalptantra data={KalpTuntraData} />
        </div>
        <div className="flex w-full mt-20 flex-col">
          <BlogPosts data={BlogCardData} />
        </div>
        <div className="flex w-full mt-[20px] lg:gap-[68px] lg:mt-[100px] mb-20 flex-col">
          <button className="cursor-pointer uppercase adca-font text-[18px] bg-[#FEF9F2] hover:bg-black hover:text-white border-black mb-6 h-14 rounded-xl w-full border-2">
            Open All Blog Posts
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
