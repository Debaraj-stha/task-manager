"use client";

import Brand from "@/components/common/Brand";
import RenderLinkWithIcon from "@/components/dashboard/RenderLinkWithIcon";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import {
    HomeIcon,
    Folder,
    MessagesSquare,
    Users,
    Calendar1Icon,
    Settings,
    HelpCircle,
    LogOut,
    Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

const iconsWithLink = [
    {
        icon: HomeIcon,
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        icon: Folder,
        label: "Projects",
        href: "/project",
        subList: [
            { slug: "/tasks/office", label: "Office" },
            { slug: "/tasks/design", label: "Design" },
            { slug: "/tasks/production", label: "Production" },
        ],
    },
    { icon: MessagesSquare, label: "Messages", href: "/messages" },
    { icon: Users, label: "Team", href: "/team-members" },
    { icon: Calendar1Icon, label: "Calendar", href: "/calendar" },
    { icon: Settings, label: "Settings", href: "/setting" },
];



const MobileNavbar = () => {
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleToggleSubMenu = (label: string, e: React.MouseEvent) => {
    e.preventDefault(); // prevents closing the menu
    e.stopPropagation();
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  return (
    <div className="md:hidden flex justify-between items-center py-4 px-6 border-b bg-white shadow-sm">
      <Brand />

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Menu className="h-6 w-6 text-gray-800" />
          </MenubarTrigger>

          <MenubarContent className="bg-gray-900 text-white w-56 shadow-xl border-none py-2 space-y-1">
            {iconsWithLink.map((link) => {
              const isActive = pathname.startsWith(link.href);
              const isOpen = openSubMenu === link.label;
              const hasSub = !!link.subList;

              return (
                <div key={link.href} className="space-y-1">
                  {/* Main Item */}
                  <div
                    onClick={(e) =>
                      hasSub
                        ? handleToggleSubMenu(link.label, e)
                        : (window.location.href = link.href)
                    }
                    className={clsx(
                      "flex items-center justify-between w-full gap-3 px-3 py-2 text-sm rounded-md cursor-pointer transition",
                      isActive ? "bg-blue-600 text-white" : "hover:bg-gray-800"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <link.icon size={16} />
                      {link.label}
                    </div>

                    {hasSub && (
                      <span className="text-xs">{isOpen ? "▲" : "▼"}</span>
                    )}
                  </div>

                  {/* Submenu Dropdown */}
                  {isOpen && hasSub && (
                    <div className="ml-9 flex flex-col gap-1 pb-1">
                      {link.subList.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={sub.slug}
                          className={clsx(
                            "text-xs px-2 py-1 rounded-md transition",
                            pathname.startsWith(sub.slug)
                              ? "text-blue-400"
                              : "text-gray-400 hover:text-gray-200"
                          )}
                        >
                          • {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom Actions */}
            <div className="border-t border-gray-700 pt-2">
              <Link
                href="/help"
                className="flex gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-800"
              >
                <HelpCircle size={16} /> Help
              </Link>

              <Link
                href="/logout"
                className="flex gap-2 px-3 py-2 text-sm text-red-400 rounded-md hover:bg-gray-800"
              >
                <LogOut size={16} /> Logout
              </Link>
            </div>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};




const DashboardSidebar = () => {
    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:flex w-60 justify-between flex-col h-screen px-6 bg-gray-100 py-8 border-r border-gray-200 shadow-xl">
                <div className="space-y-10">
                    <Brand />
                    {iconsWithLink.map((link) => (
                        <RenderLinkWithIcon key={link.href} {...link} />
                    ))}
                </div>

                <div className="space-y-10">
                    <RenderLinkWithIcon href="/help" label="Help" icon={HelpCircle} />
                    <RenderLinkWithIcon href="/logout" label="Logout" icon={LogOut} />
                </div>
            </div>

            {/* Mobile Navbar */}
            <MobileNavbar />
        </>
    );
};

export default DashboardSidebar;
