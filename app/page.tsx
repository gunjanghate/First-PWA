import { Hero } from "@/components";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Hero />
    </>
  );
}
