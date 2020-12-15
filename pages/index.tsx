import { useState, useCallback } from 'react';
import Head from 'next/head';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';
import TranslationContext from '../context/TranslationContext';
import ThemeContext from '../context/ThemeContext';
import { GetStaticProps } from 'next';
import { locales } from '../locales.json';

interface IHome {
  translation: {
    title: string;
    description: string;
  };
}

export default function Home({ translation }: IHome) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme == 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{translation.title}</title>
        <meta name="description" content={translation.description} />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        {Object.keys(locales).map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`https://portfolio.yudenichaa.vercel.app/${locale}`}
          />
        ))}
      </Head>
      <TranslationContext.Provider value={translation}>
        <ThemeContext.Provider
          value={{
            theme,
            toggleTheme,
          }}
        >
          <Header />
          <Main />
          <Footer />
        </ThemeContext.Provider>
      </TranslationContext.Provider>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translations = (await import('../languages/translations')).default;
  return {
    props: {
      translation: translations[locale],
    },
  };
};
