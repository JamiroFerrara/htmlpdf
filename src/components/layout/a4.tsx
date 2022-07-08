interface Props {
  children: React.ReactNode;
  border?: boolean
}

export default function A4(props:Props){
  const {children, border} = props
  
  return (
      <div className={`
        ${border ? "border" : ""} 
        relative border-black h-[55rem] overflow-hidden element`}
      >
        {children}
      </div>
  )
}
