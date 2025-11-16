'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface SubList {
  slug: string
  label: string
}

interface RenderLinkWithIconProps {
  href: string
  label: string
  icon: React.ComponentType
  subList?: SubList[]
}

const RenderLinkWithIcon = ({ href, label, icon: Icon, subList }: RenderLinkWithIconProps) => {
  const pathname = usePathname()
  const hasSubList = subList && subList.length > 0

  // Automatically open collapsible if active route is in sublist
  const defaultOpen = hasSubList && subList!.some(item => pathname === `/${item.slug}`)

  return (
    <div className="flex flex-col w-full">
      {hasSubList ? (
        <Collapsible defaultOpen={defaultOpen}>
          <CollapsibleTrigger asChild>
            <div className={`flex items-center justify-between gap-2 font-medium cursor-pointer p-2 rounded hover:bg-gray-100 ${defaultOpen ? "text-blue-600" : "text-gray-700"}`}>
              <div className="flex items-center gap-2">
                <Link
                  href={href}
                  className={`flex items-center gap-2 font-medium p-2 rounded hover:bg-gray-100 ${pathname === href ? "text-blue-600" : "text-gray-700"}`}
                >
                  <Icon />
                  <span>{label}</span>
                </Link>
              </div>
              <span>{defaultOpen ? '▼' : '▶'}</span>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col pl-6 mt-2 gap-2 border-l border-gray-400 ml-8">
            {subList!.map(item => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className={`text-gray-500 hover:text-blue-600 ${pathname === `/${item.slug}` ? "text-blue-600 font-semibold" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <Link
          href={href}
          className={`flex items-center gap-2 font-medium p-2 rounded hover:bg-gray-100 ${pathname === href ? "text-blue-600" : "text-gray-700"}`}
        >
          <Icon />
          <span>{label}</span>
        </Link>
      )}
    </div>
  )
}

export default RenderLinkWithIcon
