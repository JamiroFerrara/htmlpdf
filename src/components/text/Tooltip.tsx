interface Props{
  isVisible: boolean
  setBold: any
  Bold?: boolean
}

export default function Tooltip(props:Props){
  const {isVisible, setBold, Bold} = props
  
  return (
      <div className={`${isVisible ? '' : 'opacity-0'} transition absolute -top-6 self-center flex flex-row`} >
        <button onClick={() => setBold(!Bold)} className="rounded p-2 h-8 w-8 text-xs bg-slate-400 border-slate-200 border hover:bg-slate-500 text-white">B</button>
      </div>
  )
}
