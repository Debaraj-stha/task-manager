"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Item, ItemActions, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Bell, ChevronDown } from "lucide-react";
import { CgAdd } from "react-icons/cg";
import NewTaskCreateBytton from "./tasks/NewTaskCreateButton";
import CreateWorkspaceDialog from "./dashboard/CreateWorkspaceDialog";

const DashboardTopBar = () => {
  return (
    <div className="w-full flex items-center justify-between py-4 px-6 bg-white shadow-sm ">
      {/* Search Bar */}
      <div className="flex items-center gap-3 w-full md:w-1/2 ">
        <Input
          placeholder="Search your task, etc..."
          className="rounded-full py-5"
        />
      </div>

      {/* Right Icons */}

      <div className='rounded shadow-sm hidden md:flex items-center '>
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
      <div className="md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-md rounded-lg p-3 transition-all duration-200"
            >
              <CgAdd className="w-5 h-5" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="space-y-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64"
          >
            <NewTaskCreateBytton />
            <CreateWorkspaceDialog />
          </PopoverContent>
        </Popover>
      </div>

    </div>
  );
};

export default DashboardTopBar;
