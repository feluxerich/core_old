import "tailwindcss/tailwind.css";
import "@styles/index.css";
import Layout from "@components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Core</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
