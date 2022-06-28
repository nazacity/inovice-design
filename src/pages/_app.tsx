import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { THEME } from 'theme';
import createEmotionCache from 'createEmotionCache';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';
import store, { persistor } from 'store';
import SideNavbar from 'component/layout/SideNavbar';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider value={emotionCache}>
          <Head>
            <link rel="icon" href="/images/logo/favicon-32x32.png" />
            <link
              rel="apple-touch-icon"
              href="/image/logos/favicon-32x32.png"
            />
            <title>Invoice</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
            <meta name="description" content="invoice" />
            <meta property="og:description" content="invoice" />
            <meta
              property="og:image"
              content="../../public/images/logo/favicon-32x32.png"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
          </Head>
          <ThemeProvider theme={THEME}>
            <CssBaseline />
            <SideNavbar />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default MyApp;
