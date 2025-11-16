'use client'
import Brand from '@/components/common/Brand'
import RenderLinkWithIcon from '@/components/dashboard/RenderLinkWithIcon'
import { APP_NAME } from '@/constants/content'
import { Calendar, Calendar1Icon, Folder, HelpCircle, HomeIcon, LogOut, MessageSquare, MessagesSquare, ProjectorIcon, Settings, Users } from 'lucide-react'
import React from 'react'

const DashboardSidebar = () => {

    const iconsWithLink = [
        {
            icon: HomeIcon,
            label: "Dashboard",
            href: "/dashboard",

        },
        {
            icon: Folder,
            label: "Project",
            href: "/project",
            subList: [
                {
                    slug: "tasks/office",
                    label: "Office"
                },
                {
                    slug: "tasks/design",
                    label: "Design"
                },
                {
                    slug: "tasks/production",
                    label: "Production"
                },
            ]
        },
        {
            icon: MessagesSquare,
            label: "Messages",
            href: "/messages"
        },
        {
            icon: Users,
            label: "Team Members",
            href: "/team-members"
        },
        {
            icon: Calendar1Icon,
            label: "Calendar",
            href: "/calendar"
        },
        {
            icon: Settings,
            label: "Setting",
            href: "/setting"
        }
    ]

    return (
        <div className='w-60 flex justify-between flex-col h-screen px-6 bg-gray-100 py-8 border-r border-gray-200 shadow-2xl'>
            <div className='space-y-10'>
                <Brand />
                {
                    iconsWithLink.map((link) => <RenderLinkWithIcon key={link.href} {...link} />)
                }
            </div>
            <div className='space-y-10'>
                <RenderLinkWithIcon href='/help' label='Help' icon={HelpCircle} />
                <RenderLinkWithIcon href='/logout' label='Logout' icon={LogOut} />
            </div>
        </div>
    )
}

export default DashboardSidebar