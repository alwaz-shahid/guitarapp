import Layout from 'components/Layout';
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
    </Layout>
  );
}
