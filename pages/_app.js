import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Gym App</title>
      <meta name="description" content="welcome to gym app"></meta>
    </Head>
    
    <div>
    <Navbar/>
    <Component {...pageProps} />

    </div>
    
    </>
  );
}
