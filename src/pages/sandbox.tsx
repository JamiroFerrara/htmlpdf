import * as sr from '../server/signalr'

export default function Sandbox(){
  async function handleClick(){
    await sr.InitConnection();
    console.log(sr)
    const offers = await sr.GetOffers();
    console.log(offers)
  }

  return (
    <button onClick={() => handleClick()}>Connect Signalr</button>
  )
}
