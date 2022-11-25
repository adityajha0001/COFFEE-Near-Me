import Head from 'next/head';
import Banner from '../components/banner';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <main className="">
        <Banner/>
      </main>

      <footer className="">

      </footer>
    </>
  )
}
