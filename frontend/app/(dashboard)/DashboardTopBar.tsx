"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, ChevronDown } from "lucide-react";
import React from "react";

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
        <div className='px-6 flex gap-2 flex-row items-center '>
          <Avatar>
            <AvatarImage src={"https://randomuser.me/api/portraits/men/35.jpg"} height={40} width={40} alt='User profile' />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
          <div className='flex flex-row'>
            <div>
              <h3 className='m-0 text-sm font-medium'>Jhon Doe</h3>
              <small className='text-xs'>Backend Developer</small>
            </div>
            <Button variant={"ghost"} className='cursor-pointer'><ChevronDown /></Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
