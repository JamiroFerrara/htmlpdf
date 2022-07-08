export default function Header(){
  return (
    <div className="flex flex-row h-full mx-4 p-4 bg-white">
      <img src="/TAce_Logo_1.png" alt="" className="h-16 m-2"/>
      <div className="flex flex-col w-80 p-2 justify-center space-y-[3px]">
        <div className="font-extrabold text-[11px]">TECNOACE S.R.L</div>
        <div className="text-[10px]">Sede Legale: Via Solferino n.20/C 25121 BRESCIA (BS)</div>
        <div className="text-[10px]">Sede Operativa: Via Giovanni XXIII n. 23, 25080 NUVOLENTO (BS)</div>
        <div className="text-[10px]">Tel: 0306801859 - Fax: 0306916686</div>
        <div className="text-[10px]">Email: tecnoace@tecnoace.eu</div>
      </div>
      <div className="flex flex-col justify-center text-right">
        <div className="text-[10px]">P.IVA e C.F: 03083040984</div>
        <div className="text-[10px]">Numero R.E.A BRESCIA: 503675</div>
        <div className="text-[10px]">Numero Registro delle Imprese di BRESCIA: 03083040984</div>
        <div className="text-[10px]">N. Iscrizione Albo Imprese Artigiane: 171802</div>
        <div className="text-[10px]">Cap. Soc. 12.000,00€ - Interamente versato</div>
      </div>
    </div>
  )
}
