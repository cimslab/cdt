import Head from 'next/head';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Map from '@/components/Map';

export const siteTitle = 'ICDT';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Imaginging Canada Digital Twin"/>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header/>
      <Sidebar/>
      <Map/>
    </div>
  );
}