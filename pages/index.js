import Head from 'next/head';
import Banner from '../components/banner';
import Card from '../components/card';


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
        <Card
        name = "Indian coffee" 
        imgUrl = "coffee.png"
        href = "/coffee-store/Indian-coffee"/>
      </main>

      <footer className="">

      </footer>
    </>
  )
}
