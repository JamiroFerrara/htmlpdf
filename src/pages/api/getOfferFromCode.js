import * as sr from '../../server/signalr'

export default async function handler(req, res) {
  await sr.InitConnection();
  const {id} = req.query
  const offers = await sr.GetOfferFromCode(id);
  // const offers = await sr.GetOfferFromCode("MC_F_20220627_01_REV01");
  res.status(200).json({ offers })
}
