import * as sr from '../../server/signalr'
const eventsource = require('eventsource');
const ws = require('ws');

export default async function handler(req, res) {
  console.log("getOffersLog!")
  await sr.InitConnection();
  const offers = await sr.GetOffers();
  res.status(200).json({ offers })
}
