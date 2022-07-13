import * as sr from '../../server/signalr'
const ws = require('ws');
const eventsource = require('eventsource');

export default async function handler(req, res) {
  console.log("getOffersLog!")
  await sr.InitConnection();
  const offers = await sr.GetOffers();
  res.status(200).json({ offers })
}
