import "@/styles/globals.scss";
import { SessionProvider } from 'next-auth/react';

import Head from 'next/head';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} key={router.route} />
        </SessionProvider>
    </>
  );
}

export default MyApp;