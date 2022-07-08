import {Center} from '@mantine/core'

interface Props{
  src: string
}

export default function Image(props:Props){
  const {src} = props
  
  return (
    <div className="element">
      <Center className="flex flex-col ">
        <img className='h-[17rem]' src={src} alt=""/>
      </Center>
    </div>
  )
}
