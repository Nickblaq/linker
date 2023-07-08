'use client'
import * as React from 'react'
import { MaskOnIcon, TextAlignLeftIcon, TransparencyGridIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import styles from './button-icon.module.css'
import { cn } from '@/lib/utils'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { SiteConfig, siteConfig } from "@/config/site"
import { useLockBody } from "@/hooks/use-lock-body"
import { MainNavItem } from '@/types'
import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'

interface NavProps {
    items?: MainNavItem[]
    children?: React.ReactNode
}

export default function ButtonIcon () {
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

    return (
        <>
         <Button
       onClick={() => setShowMobileMenu(!showMobileMenu)}
        className='fixed bottom-6 left-6 z-50 rounded-[50%] h-12 w-12 bg-[#333] text-[#eee] flex items-center justify-center  border border-gray-200' variant="outline" size="icon">
      <TextAlignLeftIcon className="h-6 w-6 flex items-center justify-center" />
    </Button>
      
    {showMobileMenu && (
        <MobileNav />
      )}
        </>
    )
}


export function MobileNav({ items, children}: NavProps) {
    useLockBody()

    return (
      <div
      className={cn(
        "fixed inset-0  top-16 z-30 grid h-[calc(100vh-4rem)] grid-flow-row overflow-auto p-6 shadow-md animate-in slide-in-from-bottom-96",)}>
      
      <ul className="relative h-full z-20 rounded-[16px] bg-popover p-4 text-popover-foreground backdrop-blur-md border-[hsla(0,0%,100%,.1)] border  bg-gradient-to-b from-[#333]/50 to-[#333]">
        <div className='flex items-center justify-between px-2'>
        <TransparencyGridIcon className="h-6 w-6" />
            <ModeToggle />
        </div>
      
        <ul className="grid gap-3 p-4 list-none md:w-[400px] text-lg transition-transform duration-100">

          <li className="row-span-3">
        <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md
                     border border-[hsla(0,0%,100%,.1)] bg-gradient-to-b from-[#333]/50 to-[#333]
                      p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
 
                    <div className="mb-2 mt-4 text-lg font-medium text-[#bbb]">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground text-[#888]">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                  </li>

          <li className="row-span-3 text-[#bbb]">
        <a
                    className="hover:border border-[hsla(0,0%,100%,.1)] bg-gradient-to-b from-[#333]/50 to-[#333]
                      block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground text-[#888]">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                  </li>
    
          <li className="row-span-3">
        <a
                    className={
                      "hover:border border-[hsla(0,0%,100%,.1)] bg-gradient-to-b from-[#333]/50 to-[#333] block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                  </li>
                  </ul>
        {children}
      </ul>
        </div>
    )
}






