import React from 'react'
interface ContainerProps {
    children: React.ReactNode;
    extraClasses?: string;
}
const Container = ({children,extraClasses=""}:ContainerProps) => {
  return (
    <div className={`max-w-[85%] mx-auto ${extraClasses}`}>
        {children}
    </div>
  )
}

export default Container