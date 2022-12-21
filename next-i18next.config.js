module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ar'],
    localeDetection: true,
    localePath:
      typeof window === 'undefined'
        ? require('path').resolve('./public/locales')
        : '/locales',
  },
  trailingSlash: true,
  pageProps: {
    __lang: 'en',
    // __namespaces: { common: null, home: null, index: null },
  },
  __N_SSG: true,
};
