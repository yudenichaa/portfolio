const { locales, defaultLocale } = require('./locales.json');

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: Object.keys(locales),
    defaultLocale: defaultLocale,
    localeDetection: false,
  },
};
