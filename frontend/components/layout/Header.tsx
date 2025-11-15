"use client";

import { NAV_LINKS } from "@/constants/content/common";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "../common/Brand";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const role = "user"; // Later dynamic
  const filteredLinks = NAV_LINKS.filter((l) => l.role.includes(role));

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand / Logo */}
        <Brand />

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-8 font-medium text-white">
          {filteredLinks.map((link, i) => {
            const isActive = pathname === ROUTES[link.routeKey];
            return (
              <Link
                key={i}
                href={ROUTES[link.routeKey]}
                className={`transition duration-300 ${
                  isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menubar */}
        <div className="md:hidden">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="text-2xl "><MenuIcon/></MenubarTrigger>
              <MenubarContent className="bg-gray-900 text-white p-4 space-y-2 w-48 shadow-lg">
                {filteredLinks.map((link, i) => (
                  <MenubarItem key={i} className="hover:text-yellow-300">
                    <Link href={ROUTES[link.routeKey]}>{link.label}</Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
