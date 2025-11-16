import React from 'react'
interface SectionHeaderProps{
    text:string
    extraClass?:string
}
const  SectionHeader= ({text,extraClass}:SectionHeaderProps) => {
  return (
    <h2 className={`font-semibold text-2xl whitespace-nowrap ${extraClass}`}>{text}</h2>
  )
}

export default SectionHeader 