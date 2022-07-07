import type { NextPage } from "next";
import Head from "next/head";
import Paragraph from "../components/text/Paragraph";
import Title from "../components/text/Title";
import ReferenteTable from '../components/tables/ReferenteTable'
import { useRouter } from 'next/router'
import {Center} from '@mantine/core'
import A4 from '../components/layout/a4'
import Introduction from '../components/blocks/introduction'

const Home: NextPage = () => {
  const router = useRouter()
  console.log(router.query);
  var currentdate = new Date();

  return (
    <>
      <A4 border={true}>
        <Center className="flex flex-col">
          <Title>PREVENTIVO PER LA REALIZZAZIONE DI UN IMPIANTO FOTOVOLTAICO DA 60,8 KWP</Title>
          <div className="h-8"></div>
          <Paragraph>SITO IN VIA TREPONTI, 49A ROCCAFRANCA(BS)</Paragraph>
          <div className="h-8"></div>
          <Title>COMMITTENTE</Title>
          <div className="h-8"></div>
          <Paragraph>SOC.AGR.PLODARI</Paragraph>
          <Paragraph>VIA KENNEDY 5</Paragraph>
          <Paragraph>25020 DELLO BS</Paragraph>
        </Center>

        <Center className="absolute flex-col bottom-8 w-full">
          <Paragraph>Offerta n.: GB_PS_F_211029_01 PLODARI_ROCCAFRANCA</Paragraph>
          <Paragraph>Allegati:</Paragraph>
          <Paragraph>- Schede tecniche dei materiali proposti</Paragraph>
          <ReferenteTable date={currentdate.toLocaleDateString()} referente="Giorgio Bodei" email="giorgio.bodei@tecnoace.eu" phone={3409654059}/>
        </Center>
      </A4>

      <A4 border={false}>
        <Introduction/>
      </A4>

      <div className="element">
        <Center className="flex flex-col ">
          <img src="/impianto.png" alt=""/>
        </Center>
      </div>

    </>
  );
};

export default Home;
