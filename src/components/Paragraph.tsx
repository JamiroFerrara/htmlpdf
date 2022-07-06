import {useState} from 'react'

export default function Paragraph(){
  const [Bold, setBold] = useState(false)
  const [TooltipVisible, setTooltipVisible] = useState(false)
  let isToolTipHovered = false

    return (
      <div className='flex flex-row w-full justify-center' onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => isToolTipHovered ? "" : setTooltipVisible(false)} >
        <div contentEditable="true" className={`${Bold ? 'font-extrabold' : ''} p-4 text-center`}>Edit me! </div>

        <div className={`${TooltipVisible ? '' : 'opacity-0'} transition absolute self-center right-4`} >
          <button onClick={() => setBold(!Bold)} className="rounded p-2 h-10 w-10 bg-slate-400 border-slate-200 border hover:bg-slate-500 text-white">B</button>
        </div>

      </div>
    )
}
