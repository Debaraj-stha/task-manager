import React, { ReactNode } from 'react'
import DashboardSidebar from './DashboardSidebar'
import DashboardRightSidebar from './DashboardRightSidebar'
import DashboardTopBar from './DashboardTopBar'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex '>
            <DashboardSidebar />
            <div className='flex-1'>
                <DashboardTopBar />
                {children}
            </div>
          
        </div>
    )
}

export default layout