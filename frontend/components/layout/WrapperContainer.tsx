import  { type ReactNode } from 'react'

const WrapperContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mx-auto  flex flex-col bg-linear-to-r from-gray-900 to-gray-800
        relative space-y-4 md:space-y-8
        "> 
            {children}
        </div>
    )
}

export default WrapperContainer