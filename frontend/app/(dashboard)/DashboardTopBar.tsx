"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Item, ItemActions, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Bell, ChevronDown } from "lucide-react";

const DashboardTopBar = () => {
  return (
    <div className="w-full flex items-center justify-between py-4 px-6 bg-white shadow-sm ">
      {/* Search Bar */}
      <div className="flex items-center gap-3 w-1/2">
        <Input
          placeholder="Search your task, etc..."
          className="rounded-full py-5"
        />
      </div>

      {/* Right Icons */}

      <div className='rounded shadow-sm flex items-center '>
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
 
        <Item>
          <ItemMedia>
            <Avatar>
              <AvatarImage src={"https://randomuser.me/api/portraits/men/35.jpg"} height={40} width={40} alt='User profile' />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </ItemMedia>
          
            <ItemTitle>
              Jhon Doe
            </ItemTitle>
            <ItemDescription>Backend dveloper</ItemDescription>
 
          <ItemActions><ChevronDown /></ItemActions>
        </Item>
      </div>
    </div>
  );
};

export default DashboardTopBar;
