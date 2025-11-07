import React, { type ReactNode } from 'react'

const WrapperContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen mx-auto  flex flex-col bg-linear-to-r from-gray-900 to-gray-800
        relative
        ">
            {children}
        </div>
    )
}

export default WrapperContainer