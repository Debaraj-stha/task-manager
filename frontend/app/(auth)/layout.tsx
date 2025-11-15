import { Metadata } from 'next'
import React, { ReactNode } from 'react'


export const metadata: Metadata = {
    title: {
        default:"Login | Task manager system",
        template:"%s | Task manager system"
    }
}

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>

            {children}
        </div>
    )
}

export default layout