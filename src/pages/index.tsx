import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Landing from '../components/blocks/landing'
import Introduction from '../components/blocks/introduction'
import Image from '../components/blocks/image'
import Materials from '../components/blocks/materials'
import * as sr from '../server/signalr'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const router = useRouter()
  // console.log(router.query);

  return (
    <>
      <button onClick={() => init()} className="border rounded p-4 border-2 border-black hover:scale-105 transition w-full mb-8">Connect SignalR!</button>
      <Landing/>

      <Introduction/>

      <Materials/>

      <div className="element">
        <Image src="/impianto.png"/>
        <Image src="/impianto.png"/>
        <Image src="/impianto.png"/>
      </div>

    </>
  );
};

export default Home;

const init = async () => {
  console.log("Initializing connection...");
  await sr.InitConnection();
  // var res = await sr.GetOffers();
  // console.log(res);
}
