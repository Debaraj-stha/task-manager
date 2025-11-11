import  { type ReactNode } from 'react'

interface ModalProps{
    onClose?:()=>void
    children:ReactNode
}
const Modal = ({onClose,children}:ModalProps) => {
  return (
    <div
    onClick={()=>onClose?.()}
    className='inset-0 absolute opacity-90 bg-gray-900 flex justify-center flex-col items-center hover:bg-gray-950 transition-all z-50 min-h-screen'>
        {children}
    </div>
  )
}

export default Modal