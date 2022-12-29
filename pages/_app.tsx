import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import store from '../src/redux/store';
{
  /* SCSS files */
}
import '../styles/globals.scss';
import '../src/containers/landing/landing.scss';
import '../src/components/kosha/headerOne/header.scss';
import '../src/containers/solutionPage/solution.scss';
import '../src/containers/aboutUs/about.scss';
import '../styles/Home.module.scss';
import '../src/components/kosha/eventCard/event.scss';
import '../src/components/kosha/blog/blog.scss';
import '../src/components/kosha/powerBy/powerBy.scss';
import '../src/components/kosha/ecosystem/ecosystem.scss';
import '../src/components/kosha/Layout/layout.scss';
import '../src/containers/contactUs/contact.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
