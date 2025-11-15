import React from 'react'
interface SectionTitleProps {
    title: string,
    textColor?:string
}
const SectionTitle: React.FC<SectionTitleProps> = ({ title,textColor="text-gray-900 dark:text-white"}) => {
    return (
        <h2 className={` text-2xl font-semibold text-center mb-1 ${textColor}`}>{title}</h2>
    )
}

export default SectionTitle