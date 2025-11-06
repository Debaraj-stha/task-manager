import React from 'react'
interface SectionTitleProps {
    title: string,
    textColor?:string
}
const SectionTitle: React.FC<SectionTitleProps> = ({ title,textColor="title-color"}) => {
    return (
        <h2 className={`heading-2 text-center mb-1 ${textColor}`}>{title}</h2>
    )
}

export default SectionTitle