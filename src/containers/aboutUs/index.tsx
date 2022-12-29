import React, { Fragment } from 'react';
import Footer from '../../components/kosha/footer';
import HeaderOne from '../../components/kosha/headerOne';
import BackgroundImage from '../../components/kosha/backgroundImage';
import PageBriefText from '../../components/kosha/pageBriefText';
import FeaturesCard from '../../components/kosha/featuresCard';

function About() {
  return (
    <Fragment>
      <BackgroundImage />
      <HeaderOne page="about" />
      <main>
        <PageBriefText page="about" />
        <div className="relative px-8 md:px-14 mt-4 mb-[5vh] md:mb-[20vh]">
          <FeaturesCard />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default About;
