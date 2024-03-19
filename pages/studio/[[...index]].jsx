import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { metadata } from 'next-sanity/studio/metadata'
import config from '../../sanity.config'
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const Home = dynamic(() => import('pages'));

export default function StudioPage() {
  const router = useRouter();
  const { pathname } = router;

  if (pathname.startsWith('/studio')) {
    return (
      <>
        <Head>
          {Object.entries(metadata).map(([key, value]) => (
            <meta key={key} name={key} content={value} />
          ))}
        </Head>
        <NextStudio config={config} />
      </>
    );
  }

  return <Home />;
}