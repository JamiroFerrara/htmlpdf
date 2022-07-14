import type { NextPage } from "next";
import { useRouter } from "next/router";
import Landing from "../components/blocks/landing";
import Introduction from "../components/blocks/introduction";
import Image from "../components/blocks/image";
import Materials from "../components/blocks/materials";
import * as sr from "../server/signalr";
import { useEffect, useState } from "react";
import {Offer} from  '../models/offer'

const Home: NextPage = () => {
  const [Content, setContent] = useState<Offer>(null);
  const router = useRouter();
  const {id} = router.query;
  // const id = "MC_F_20220627_01_REV01";
  const url = "https://htmlpdf.vercel.app"
  // const url = "http://localhost:3000";
  const method = "/api/getOfferFromCode?id=";
  const fullUrl = url + method + id

  useEffect(() => {
    const getContent = async () => {
      if (id) {
        let offer = await getOffersFromCode(fullUrl)
        setContent(offer.offers);
        console.log(offer.offers);
      }
    };
    getContent();
  }, [id]);

  if (!Content) {
    return <div className="flex justify-center w-full h-full">LOADING..</div>;
  }

  return (
    <>
      <Landing {...Content}/>

      <Introduction />

      <Materials {...Content}/>

      <div className="element">
        <Image src="/impianto.png" />
        <Image src="/impianto.png" />
        <Image src="/impianto.png" />
      </div>
    </>
  );
};

export default Home;

async function getOffersFromCode(url: string) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })

}
