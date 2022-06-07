import { AppContext } from "context/AppContext";
import { useInitialState } from "hooks/useInitialState";

import { Header } from "components/Header";

import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <>
      <Head>
        <title>Yard Sale</title>
      </Head>
      <AppContext.Provider value={initialState}>
        <Header />
        <Component {...pageProps} />;
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
