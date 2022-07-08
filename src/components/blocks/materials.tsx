interface itemProps {
  pos?: string;
  art?: any;
  title?: string;
  desc?: string[];
  qty?: any;
}

interface totalProps{
  title: string;
  total: string;
}

export default function Materials() {
  return (
    <>
      <div className="h-4"></div>
      <div className="text-xl font-extrabold underline text-blue-900">OFFERTA ECONOMICA SOLUZIONE 1:</div>
      <div className="h-4"></div>
      <MaterialHeader />
      <MaterialItem pos="1" art="panel" title="Content" desc={["Tensione massima asdfasdf"]} qty={160}/>
      <MaterialItem pos="1" art="panel" title="Content" desc={["Tensione massima asdfasdf"]} qty={160}/>
      <MaterialItem pos="1" art="panel" title="Content" desc={["Tensione massima asdfasdf"]} qty={160}/>
      <MaterialItem pos="1" art="panel" title="Content" desc={["Tensione massima asdfasdf"]} qty={160}/>
      <MaterialItem pos="1" art="panel" title="Content" desc={["Tensione massima asdfasdf"]} qty={160}/>
      <MaterialItem pos="1" art="panel" title="Content" desc={["Tensione massima asdfasdf"]} qty={160}/>
      <MaterialItem pos="1" art="panel" title="Content" desc={["Tensione massima asdfasdf"]} qty={160}/>
      <MaterialItem pos="1" art="panel" title="Content" desc={["Tensione massima asdfasdf"]} qty={160}/>
      <MaterialItem pos="1" art="panel" title="Content" desc={["Tensione massima asdfasdf"]} qty={160}/>
      <MaterialItem pos="1" art="panel" title="Content" desc={["Tensione massima asdfasdf"]} qty={160}/>
      <MaterialItem pos="1" art="panel" title="Content" desc={["Tensione massima asdfasdf"]} qty={160}/>
      <MaterialTotal title="Importo totale (IVA esclusa)" total={"€ 51.000,00"}/>
      <MaterialTotal title="Importo al kW (IVA esclusa)" total={"€/kWp 838,16"}/>
    </>
  );
}

export function MaterialItem(props: itemProps) {
  const { pos, art, title, desc, qty } = props;

  return (
    <div contentEditable className="gridItem flex">
      <div className="w-1/12 border-black border-r-[1px] p-2 flex flex-col justify-center">
        {pos}
      </div>
      <div className="w-3/12 border-black border-r-[1px] p-2 flex flex-col justify-center">
        <img className="min-h-32 min-w-32" src="https://www.itrisorse.it/wp-content/uploads/2020/01/shop_07-1.jpg"></img>
      </div>
      <div className="w-6/12 border-black p-2 justify-center text-left m-auto">
        <div className="font-extrabold">{title}:</div>
        <div>{desc}</div>
      </div>
      <div className="w-2/12 font-extrabold border-l-[1px] border-black p-2 flex flex-col justify-center">
        {qty}
      </div>
    </div>
  );
}

export function MaterialHeader() {
  return (
    <>
      <div className="gridItem flex border border-black w-full h-10 bg-blue-500">
        <div className="w-1/12 text-center text-wrap break-words text-white pt-2">
          Posiz.
        </div>
        <div className="w-3/12 text-center text-wrap break-words text-white border-x-2 border-black pt-2">
          Articolo
        </div>
        <div className="w-6/12 text-center text-wrap break-words text-white border-r-2 border-black pt-2">
          Descrizione elementi impianto FTV
        </div>
        <div className="w-2/12 text-center text-wrap break-words text-white border-black pt-2">
          Quanittà
        </div>
      </div>
    </>
  );
}


export function MaterialTotal(props: totalProps){
  const {title, total} = props;

  return (
    <div contentEditable className="gridItem flex bg-blue-500 text-white text-xl font-extrabold">
      <div className="w-8/12 border-black border-r-[1px] p-4 flex flex-col justify-center">
        {title}
      </div>
      <div className="w-4/12 border-black border-r-[1px] p-4 flex flex-col justify-center">
        {total}
      </div>
    </div>
  )
}
