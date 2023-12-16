import { StateProvider } from "@/context/StateContext";
import { initialState, reducer } from "@/context/StateReducers";
import Head from 'next/head'
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Whatsapp</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </StateProvider>
  );
  // return <Component {...pageProps} />;
}
