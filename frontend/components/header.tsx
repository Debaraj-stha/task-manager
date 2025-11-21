'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import { Menubar, MenubarContent, MenubarItem, MenubarTrigger } from "./ui/menubar"
import { MenubarMenu } from "@radix-ui/react-menubar"
import { Calendar, Contact, Home, Info, Menu as MenuIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import LoginForm from "./login-form"
import Brand from "./brand"

interface NavLink {
  href: string
  label: string
  icon?: React.ComponentType<any>
}

const Header = () => {
  const [loginFormOpen, setLoginFormOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const toggleLoginForm = () => setLoginFormOpen(!loginFormOpen)

  const links: NavLink[] = [
    { href: "/", label: "Home", icon: Home },
    { href: "/features", label: "Features", icon: Calendar },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Contact },
  ]

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      // Hide sticky temporarily
      setIsSticky(false)

      if (timerRef.current) clearTimeout(timerRef.current)

      // When scrolling stops
      timerRef.current = setTimeout(() => {
        setIsSticky(true)
      }, 150)
    }

    const throttled = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttled)
    return () => window.removeEventListener("scroll", throttled)
  }, [])


  // Mobile menu item
  const MobileMenuItem = ({ navLink }: { navLink: NavLink }) => {
    const Icon = navLink.icon
    return (
      <MenubarItem className="flex items-center gap-2 px-4 py-2 ">
        {Icon && <Icon className="w-4 h-4 " />}
        <Link className="font-medium text-md" href={navLink.href}>{navLink.label}</Link>
      </MenubarItem>
    )
  }

  // Mobile Menubar
  const MobileMenubar = () => (
    <div className="md:hidden">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <MenuIcon className="w-6 h-6 " />
          </MenubarTrigger>
          <MenubarContent className="flex flex-col">
            {links.map((link) => (
              <MobileMenuItem key={link.href} navLink={link} />
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out
        ${isSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-50"}
      `}
    >
      <header className="flex h-16 md:h-24 items-stretch justify-between bg-white/90 backdrop-blur-sm shadow-md">
        {/* Brand */}
        <div className="w-1/2 h-full">
          <div
            className="bg-primary text-white h-full flex items-center px-6"
            style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
          >
            <Brand />
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center px-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground font-semibold text-md hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={toggleLoginForm}
            className="text-sm bg-secondary hover:bg-[var(--secondary-hover)] font-bold cursor-pointer transition-colors"
          >
            Login
          </Button>
        </nav>

        {/* Mobile nav */}
        <MobileMenubar />
      </header>

      {loginFormOpen && <LoginForm onClose={toggleLoginForm} />}
    </div>
  )
}

export default Header
