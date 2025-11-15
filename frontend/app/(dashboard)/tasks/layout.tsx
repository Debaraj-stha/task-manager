import React, { ReactNode } from 'react'
import Sidebar from './Sidebar'

const layout = ({children}:{children:ReactNode}) => {
    return (
         <div className="flex flex-col md:flex-row md:h-[calc(100vh-80px)] bg-linear-to-br from-gray-800 to-gray-900 text-gray-900">
      {/* Sidebar */}
     <Sidebar/>

      {/* Main content — scrollable */}
      <div className="flex-1 overflow-y-auto bg-white">
        {children}
      </div>
    </div>
    )
}

export default layout