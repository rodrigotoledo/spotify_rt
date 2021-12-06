import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black h-screen overflow-hidden">
        <main>
          <Sidebar />
          {/* <center></center> */}
        </main>
      </div>

      <div>{/* <player></player> */}</div>
    </div>
  );
}
