import { Grid, Center } from "@mantine/core";
import {Offer} from '../../models/offer'

export default function ReferenteTable(offer:Offer) {
  return (
    <Center className="mt-2">
      <Grid className="justify-center w-[50rem]">
        <Grid.Col className="border-black border text-center border-t-2 border-l-2 font-extrabold text-blue-900" span={5} >
          DATA
        </Grid.Col>
        <Grid.Col className="border-black border text-center border-t-2 border-r-2 font-extrabold text-blue-900" span={5} >
          REFERENTE
        </Grid.Col>
        <Grid.Col className="border border-black text-center border-b-2 border-l-2" span={5} >
          <div className="flex flex-col justify-center align-middle h-full">
            {offer.date.toString()}
          </div>
        </Grid.Col>
        <Grid.Col className="border border-black text-center border-b-2 border-r-2" span={5} >
          <div className="flex flex-col">
            <div contentEditable={true}>{offer.responsable.name}</div>
            <div contentEditable={true}>Cell. {offer.responsable.cell}</div>
            <div contentEditable={true}>E-mail: {offer.responsable.mail}</div>
          </div>
        </Grid.Col>
      </Grid>
    </Center>
  );
}
