import Paragraph from "../../components/text/Paragraph";
import Title from "../../components/text/Title";
import ReferenteTable from '../../components/tables/ReferenteTable'
import A4 from '../layout/a4'
import {Center} from '@mantine/core'

interface Props {
    address: string
}

export default function Landing(props:Props){
  const {address} = props
  var currentdate = new Date();

  return (
    <>
      <A4 border={true}>
        <Center className="flex flex-col">
          <div className="h-8"></div>
          <Title>PREVENTIVO PER LA REALIZZAZIONE DI UN IMPIANTO FOTOVOLTAICO DA 60,8 KWP</Title>
          <div className="h-6"></div>
          <Paragraph uppercase={true} center={true}>SITO IN: {address}</Paragraph>
          <div className="h-6"></div>
          <Title>COMMITTENTE</Title>
          <div className="h-6"></div>
          <Paragraph center={true}>SOC.AGR.PLODARI</Paragraph>
          <Paragraph center={true}>VIA KENNEDY 5</Paragraph>
          <Paragraph center={true}>25020 DELLO BS</Paragraph>
        </Center>

        <Center className="absolute flex-col bottom-8 w-full">
          <Paragraph center={true} bold={true}>Offerta n.: GB_PS_F_211029_01 PLODARI_ROCCAFRANCA</Paragraph>
          <Paragraph center={false}>Allegati:</Paragraph>
          <Paragraph center={false}>- Schede tecniche dei materiali proposti</Paragraph>
          <ReferenteTable date={currentdate.toLocaleDateString()} referente="Giorgio Bodei" email="giorgio.bodei@tecnoace.eu" phone={3409654059}/>
        </Center>
      </A4>
    </>
  )
}
