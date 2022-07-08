export default function Materials() {
  return (
    <>
      <MaterialHeader />
      <MaterialItem pos="1" art="panel" title="Content" />
      <MaterialItem pos="1" art="panel" title="Content" />
      <MaterialItem pos="1" art="panel" title="Content" />
      <MaterialItem pos="1" art="panel" title="Content" />
      <MaterialItem pos="1" art="panel" title="Content" />
      <MaterialItem pos="1" art="panel" title="Content" />
      <MaterialItem pos="1" art="panel" title="Content" />
      <MaterialItem pos="1" art="panel" title="Content" />
      <MaterialItem pos="1" art="panel" title="Content" />
      <MaterialItem pos="1" art="panel" title="Content" />
    </>
  );
}

interface itemProps {
  pos?: string;
  art?: any;
  title?: string;
  desc?: string[];
  qty?: any;
}

export function MaterialItem(props: itemProps) {
  const { pos, art, title, desc, qty } = props;

  return (
    <div contentEditable className="gridItem flex">
      <div className="w-1/12 border p-2 flex flex-col justify-center">
        {pos}
      </div>
      <div className="w-3/12 border p-2 flex flex-col justify-center">
        <img className="min-h-32 min-w-32" src="https://www.itrisorse.it/wp-content/uploads/2020/01/shop_07-1.jpg"></img>
      </div>
      <div className="w-6/12 border p-2 justify-center text-left">
        <div className="flex flex-col h-full justify-center">
          {title}
        </div>
      </div>
      <div className="w-2/12 font-extrabold border p-2 flex flex-col justify-center">
        {qty}
      </div>
    </div>
  );
}

export function MaterialHeader() {
  return (
    <>
      <div className="gridItem flex border border-black w-full h-10">
        <div className="w-1/12 text-center text-wrap break-words bg-blue-500 text-white">
          Posiz.
        </div>
        <div className="w-3/12 text-center text-wrap break-words bg-blue-500 text-white border-x-2 border-black">
          Articolo
        </div>
        <div className="w-6/12 text-center text-wrap break-words bg-blue-500 text-white border-r-2 border-black">
          Descrizione elementi impianto FTV
        </div>
        <div className="w-2/12 text-center text-wrap break-words bg-blue-500 text-white border-black">
          Quanittà
        </div>
      </div>
    </>
  );
}
