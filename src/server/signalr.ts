import { HubConnectionBuilder, LogLevel, HttpTransportType } from '@microsoft/signalr';

let connection: any;

export async function InitConnection(){
  const ip = "signalr.tecnoace.eu"
  // const iIp = "192.168.11.54"
  const port = "15191"
  const hub  = "Tecnoace_Report"
  const url = "https://" + ip + ":" + port + "/" + hub

  try {
    connection = new HubConnectionBuilder()
      .withUrl(url, {
        transport: HttpTransportType.LongPolling
      })
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

export async function GetOfferFromCode(code: string) : Promise<any>{
  const res = await connection.invoke("GetOfferFromCode", code)
  return res;
}

export async function GetOffers() : Promise<any>{
  const res = await connection.invoke("GetOffers", false)
  return res;
}
