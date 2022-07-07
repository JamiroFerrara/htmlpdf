export default function Header(){
  return (
    <div className="flex flex-row h-full mx-4 p-4 bg-white">
      <img src="/TAce_Logo_1.png" alt="" className="h-16 m-2"/>
      <div className="flex flex-col w-80 p-2 justify-center space-y-[3px]">
        <h1 className="font-extrabold text-[11px]">TECNOACE S.R.L</h1>
        <p className="text-[10px]">Sede Legale: Via Solferino n.20/C 25121 BRESCIA (BS)</p>
        <p className="text-[10px]">Sede Operativa: Via Giovanni XXIII n. 23, 25080 NUVOLENTO (BS)</p>
        <p className="text-[10px]">Tel: 0306801859 - Fax: 0306916686</p>
        <p className="text-[10px]">Email: tecnoace@tecnoace.eu</p>
      </div>
      <div className="flex flex-col justify-center text-right">
        <p className="text-[10px]">P.IVA e C.F: 03083040984</p>
        <p className="text-[10px]">Numero R.E.A BRESCIA: 503675</p>
        <p className="text-[10px]">Numero Registro delle Imprese di BRESCIA: 03083040984</p>
        <p className="text-[10px]">N. Iscrizione Albo Imprese Artigiane: 171802</p>
        <p className="text-[10px]">Cap. Soc. 12.000,00€ - Interamente versato</p>
      </div>
    </div>
  )
}
