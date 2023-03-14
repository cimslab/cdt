import Head from "next/head";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Map from "../Map";

export const siteTitle = "ICDT";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Imaginging Canada Digital Twin" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      <Sidebar />
      <Map />
    </div>
  );
}
