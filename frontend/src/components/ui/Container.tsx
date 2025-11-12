import  { type ReactNode, type RefObject } from 'react'
interface ContainerProps{
  children:ReactNode
  extraClass?:string
  ref?:RefObject<HTMLDivElement|null>
}
const Container = ({ref,children,extraClass}:ContainerProps) => {
  return (
    <section className={`container mx-auto px-6 py-16 text-center text-gray-900 ${extraClass}`}ref={ref}>{children}</section>
  )
}

export default Container