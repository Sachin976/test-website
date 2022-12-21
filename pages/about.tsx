import React from 'react';
import AboutUs from '../src/containers/aboutUs';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['index'])),
  },
});

export default About;
