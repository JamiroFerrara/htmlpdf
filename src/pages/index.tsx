import type { NextPage } from "next";
import { useRouter } from 'next/router'
import {Center} from '@mantine/core'
import A4 from '../components/layout/a4'
import Landing from '../components/blocks/landing'
import Introduction from '../components/blocks/introduction'
import Image from '../components/blocks/image'

const Home: NextPage = () => {
  const router = useRouter()
  console.log(router.query);

  return (
    <>
      <Landing/>

      <Introduction/>

      <Image src="/impianto.png"/>

    </>
  );
};

export default Home;
