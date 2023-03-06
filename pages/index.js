import Head from 'next/head';
import Layout, { siteTitle } from '@/components/Layout';
import { MapProviders } from "../providers/providers";

export default function Home() {
    return (
        <MapProviders>
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
            </Layout>
        </MapProviders>
    );
}