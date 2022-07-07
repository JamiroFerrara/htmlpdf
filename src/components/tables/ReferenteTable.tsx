import { Grid, Center } from "@mantine/core";

interface Props {
  date?: string;
  referente?: string;
  phone?: number;
  email?: string;
}

export default function ReferenteTable(props: Props) {
  const { date, referente, phone, email } = props;

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
          {date}
        </Grid.Col>
        <Grid.Col className="border border-black text-center border-b-2 border-r-2" span={5} >
          <div className="flex flex-col">
            <div contentEditable={true}>{referente}</div>
            <div contentEditable={true}>Cell. {phone}</div>
            <div contentEditable={true}>E-mail: {email}</div>
          </div>
        </Grid.Col>
      </Grid>
    </Center>
  );
}
