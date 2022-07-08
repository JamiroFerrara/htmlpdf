import Paragraph from "../../components/text/Paragraph";
import Title from "../../components/text/Title";
import ReferenteTable from '../../components/tables/ReferenteTable'
import A4 from '../layout/a4'
import {Center} from '@mantine/core'

export default function Landing(){
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
    </>
  )
}
