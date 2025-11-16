import React, { ReactNode } from 'react'

interface FlexBoxProps{
    children:ReactNode
    extraClass?:string
}
const FlexBox = ({children,extraClass="justify-between"}:FlexBoxProps) => {
  return (
    <div className={`flex items-center ${extraClass}`}>
        {children}
    </div>
  )
}

export default FlexBox