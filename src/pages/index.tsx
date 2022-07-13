import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Landing from '../components/blocks/landing'
import Introduction from '../components/blocks/introduction'
import Image from '../components/blocks/image'
import Materials from '../components/blocks/materials'
import * as sr from '../server/signalr'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [Content, setContent] = useState(null)
  const router = useRouter()
  const {id} = router.query;
  // const id = "MC_F_20220627_01_REV01"

  useEffect(()=> {
    const getContent = async () => {
      if (id){
        let res = await fetch("https://htmlpdf.vercel.app/api/getOfferFromCode?id=" + id);
        const data = await res.json();
        setContent(data.offers);
        console.log(id);
        console.log(data.offers);
      }
    }
    getContent();
  }, [id])

  if (!Content){
      return <div className="flex justify-center w-full h-full">LOADING..</div>
  }

  return (
    <>
      <Landing address={Content.client.address}/>

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

