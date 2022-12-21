import React, { Fragment } from 'react';
import { list } from './data';
import Footer from '../../components/kosha/footer';
import HeaderOne from '../../components/kosha/headerOne';
import BackgroundImage from '../../components/kosha/backgroundImage';
import PageBriefText from '../../components/kosha/pageBriefText';
import Image from 'next/image';
import { gridCustomCss } from '../../helpers/commonFunction';

function About() {
  return (
    <Fragment>
      <BackgroundImage />
      <HeaderOne />
      <main>
        <PageBriefText page="about" />
        <div className="relative px-8 md:px-13 mb-[5vh] md:mb-[10vh]">
          <div>
            <p className="uppercase font-[600] text-[23px]  mb-20">
              Key Features
            </p>
          </div>
          <div className="grid justify-items-center md:justify-items-start md:grid-cols-2 lg:grid-cols-3 gap-10">
            {list.map((card: any, idx: number) => {
              let css = gridCustomCss(idx + 1);
              return <FeaturesCard key={idx} {...card} css={css} />;
            })}
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

function FeaturesCard(props: any) {
  return (
    <div
      className={`${
        props?.css ? props?.css : 'lg:justify-self-center'
      }  relative z-1 w-[80%]`}
    >
      <div className="flex border-hover gap-[20px] w-full rounded-lg">
        <div>
          <Image width={60} height={60} src={props.image} alt={props.image} />
        </div>
        <div className="flex flex-col ">
          <p className="uppercase font-medium text-[15px]">{props.title}</p>
          <p className="font-[300] summary text-sm opacity-[0.5]">
            {props.summary?.length > 200
              ? props.summary?.slice(0, 200) + ' ...'
              : props.summary}
          </p>
          <p className="hidden font-[300] description text-sm opacity-[0.5]">
            {props.summary}
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
