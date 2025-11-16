import SectionHeader from '@/components/common/SectinHeader'
import AvatarGroup from '@/components/dashboard/AvatarGroup'
import IconWithText from '@/components/dashboard/IconWithText'


import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Item, ItemActions } from '@/components/ui/item'

import { Calendar, Calendar1Icon, CheckCircle, Circle, MoreHorizontal, UsersRound } from 'lucide-react'

import { HiOutlineStatusOnline } from 'react-icons/hi'

export const memberAvatars = [
    { name: "Alice Johnson", url: "https://randomuser.me/api/portraits/women/21.jpg" },
    { name: "Bob Singh", url: "https://randomuser.me/api/portraits/men/35.jpg" },
    { name: "Charlie Chen", url: "https://randomuser.me/api/portraits/men/42.jpg" },
    { name: "Diana Gomez", url: "https://randomuser.me/api/portraits/women/45.jpg" },
    { name: "Ethan Kim", url: "https://randomuser.me/api/portraits/men/51.jpg" },
    { name: "Fiona Lee", url: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "George Brown", url: "https://randomuser.me/api/portraits/men/28.jpg" },
    { name: "Hannah Davis", url: "https://randomuser.me/api/portraits/women/12.jpg" },
    { name: "Ian Roberts", url: "https://randomuser.me/api/portraits/men/61.jpg" },
]


const DashboardRightSidebar = () => {
    return (
        <div className='w-80 py-6  bg-gray-100 border-l border-gray-200 shadow-2xl space-y-5 h-screen'>

            <div className='px-6 py-3 text-gray-800 space-y-5 border-b border-gray-300'>
                <div className={`flex items-center justify-between gap-2 `}>
                    <SectionHeader text='Project Overview' />
                    <Button variant={"ghost"}>
                        <MoreHorizontal className="w-5 h-5" />
                    </Button>

                </div>
                <h2 className='capitalize tracking-wide font-medium text-2xl'>Online Course platform</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque rerum alias, ab adipisci doloribus enim, dolor iusto,
                    fugiat ...
                    .</p>
                <Item className='flex justify-between my-0'>
                    <IconWithText text='Status' icon={HiOutlineStatusOnline} />
                    <Badge className='py-2'>In progress</Badge>
                </Item>
                <Item className='flex justify-between my-0'>
                    <IconWithText text='Timeline' icon={Calendar1Icon} />
                    <span>2026/05/12</span>
                </Item>
                <Item className='flex justify-between my-0'>
                    <IconWithText text='Assignee' icon={UsersRound} />
                    <AvatarGroup
                        imageURLs={memberAvatars.map((images) => images["url"])}
                        names={memberAvatars.map((images) => images["name"])}
                    />
                </Item>
                <Item className='flex justify-between my-0'>
                    <IconWithText text='Label' icon={Calendar} />
                    <ItemActions  className='cursor-pointer hover:text-cyan-600'>+ Add Label</ItemActions>
                </Item>
            </div>
            <div className='px-6 py-3 text-gray-800 space-y-5'>
                <SectionHeader text='Today Tasks' />
                <Item className='my-0'>
                    <CheckCircle className='text-green-600' />
                    <span className='text-green-600 line-through'>Lorem ipsum dolor sit amet </span>
                </Item>
                <Item className='my-0' >
                    <CheckCircle className='text-green-600' />
                    <span className='text-green-600 line-through'>Lorem ipsum dolor sit amet </span>
                </Item>
                <Item className='my-0'>
                    <CheckCircle className='text-green-600' />
                    <span className='text-green-600 line-through'>Lorem ipsum dolor sit amet </span>
                </Item>
                <Item className='my-0' >
                    <Circle className='' />
                    <span className=' line-through'>Lorem ipsum dolor sit amet </span>
                </Item>
                <Item className='my-0'>
                    <Circle className='' />
                    <span className=' line-through'>Lorem ipsum dolor sit amet </span>
                </Item>
            </div>

        </div>
    )
}

export default DashboardRightSidebar