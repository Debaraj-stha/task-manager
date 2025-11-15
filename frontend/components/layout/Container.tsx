import { ReactNode } from 'react'

interface ContainerProps{
    children:ReactNode
    extraClass?:string
}
const Container = ({children,extraClass}:ContainerProps) => {
  return (
    <div className={`mx-auto max-w-[85%] ${extraClass}`}>
        {children}
    </div>
  )
}

export default Container