import Layout from 'components/Layout';
import UpcomingScreen from 'components/screens/UpcomingScreen';
import WelcomeScreen from 'components/screens/WelcomeScreen';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Gitarr </title>
      </Head>
      <WelcomeScreen />
      <div className='min-h-[120px] w-full bg-primary flex justify-evenly' />
      <UpcomingScreen />
    </Layout>
  );
}
