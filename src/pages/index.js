import Head from 'next/head';
import Image from 'next/image';
import Header from 'components/Header';
import Layout from 'components/Layout';

import { getAllPostsForHome } from 'lib/api';

import styles from 'styles/Home.module.scss';

function Home({ dayMenu }) {
  console.log( 'dayMenu',dayMenu );
  const {metadata} = dayMenu[0];

  return (
    <>
      <Head>
        <title>Restaurant Template</title>
        <meta name="description" content="Create template using cosmic.js CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout >
        <Header name={metadata?.name} intro={metadata?.intro} url={metadata?.cover_image?.imgix_url}/>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const dayMenu = (await getAllPostsForHome(preview)) || []
  return {
    props: { dayMenu },
  }
}

export default Home;