import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Landing from '../components/blocks/landing'
import Introduction from '../components/blocks/introduction'
import Image from '../components/blocks/image'
import Materials from '../components/blocks/materials'

const Home: NextPage = () => {
  const router = useRouter()
  console.log(router.query);

  return (
    <>
      <Landing/>

      <Introduction/>

      <Materials/>

      <Image src="/impianto.png"/>

    </>
  );
};

export default Home;
