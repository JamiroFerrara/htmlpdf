import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

let connection;

export default async function handler(req, res) {
  console.log("getOffersLog!")
  await InitConnection();
  const offers = await GetOffers();
  res.status(200).json({ offers })
}


export async function InitConnection(){
  const ip = "signalr.tecnoace.eu"
  // const iIp = "192.168.11.54"
  const port = "15191"
  const hub  = "Tecnoace_Report"
  const url = "https://" + ip + ":" + port + "/" + hub

  try {
    connection = new HubConnectionBuilder()
      .withUrl(url)
      .configureLogging(LogLevel.Information)
      .build();

    // connection.onclose(e => {
    // });

    await connection.start().then(() => {console.log("Connected!")});
    // await connection.invoke("SendMessage", "phone", "connected" );
  } catch (e) {
    console.log(e);
  }
}

export async function GetOffers(){
  const res = await connection.invoke("GetOffers", false)
  return res;
}
