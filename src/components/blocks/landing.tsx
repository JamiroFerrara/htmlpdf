import Paragraph from "../../components/text/Paragraph";
import Title from "../../components/text/Title";
import ReferenteTable from '../../components/tables/ReferenteTable'
import A4 from '../layout/a4'
import {Center} from '@mantine/core'
import {Offer} from '../../models/offer'

export default function Landing(offer:Offer){
  var currentdate = new Date();

  return (
    <>
      <A4 border={true}>
        <Center className="flex flex-col">
          <div className="h-8"></div>
          <Title>PREVENTIVO PER LA REALIZZAZIONE DI UN IMPIANTO FOTOVOLTAICO DA {offer.plantPower} KWP</Title>
          <div className="h-6"></div>
          <Paragraph uppercase={true} center={true}>SITO IN: {offer.plantAddress}</Paragraph>
          <div className="h-6"></div>
          <Title>COMMITTENTE</Title>
          <div className="h-6"></div>
          <Paragraph uppercase={true} center={true}>{offer.client.name}</Paragraph>
          <Paragraph uppercase={true} center={true}>{offer.client.address}</Paragraph>
        </Center>

        <Center className="absolute flex-col bottom-8 w-full">
          <Paragraph center={true} bold={true}>Offerta n.: {offer.offerCode}</Paragraph>
          <Paragraph center={false}>Allegati:</Paragraph>
          <Paragraph center={false}>- Schede tecniche dei materiali proposti</Paragraph>
          <ReferenteTable {...offer}/>
        </Center>
      </A4>
    </>
  )
}
