'use client'
import * as React from "react"
import { useId, useState, useTransition } from "react"
import Link from "next/link"
import { SiteConfig, siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"
import { Icons } from "./icons"
import { MainNavItem } from "@/types"
import { useSelectedLayoutSegment } from "next/navigation"
import { NavigationMenuLink } from "./ui/navigation-menu"
import { HamburgerMenuIcon, MaskOnIcon } from "@radix-ui/react-icons"
import { Transition } from "@headlessui/react"
import { TextAlignLeftIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Cross1Icon } from "@radix-ui/react-icons"
interface NavProps {
    items: MainNavItem[]
    children?: React.ReactNode
}



export function MainNav({ items, children }: NavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex items-center justify-between border-b border-gray-200  gap-6 md:gap-10 h-16 px-4">
      <Link href="/" className="items-center space-x-2 md:flex">
        <p className=" font-black text-2xl font-serif sm:inline-block">
          {siteConfig.name}
        </p>
      </Link>
      
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}

        {showMobileMenu ? 
          <>
          <Button
          size='icon'
           onClick={() => setShowMobileMenu(!showMobileMenu)}
           className='rounded-[50%] bg-[#333]   text-[#eee] relative flex items-center justify-center  border border-gray-200' variant="outline">
        <Cross1Icon className="h-6 w-6 flex items-center justify-center" />
      </Button>
        </>
        :  
      
        <>
         <Button
           onClick={() => setShowMobileMenu(!showMobileMenu)}
           className='rounded-[50%] bg-[#333]   text-[#eee] relative flex items-center justify-center  border border-gray-200' variant="outline" size="icon">
        <HamburgerMenuIcon className="h-6 w-6 flex items-center justify-center" />
      </Button>
          {/* <Button 
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className='rounded-[50% ] h-full w-full bg-[#333 text-[#eee] flex items-center justify-center  border border-gray-200' variant="outline" size="icon">
        <TextAlignLeftIcon className="flex items-center justify-center" />
      </Button> */}
      </>
      
        }
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  )
}


 export function MobileNav({ items, children}: NavProps) {
    useLockBody()

    return (
      <div
      className="fixed inset-0  top-16 z-30 grid h-[calc(100vh-4rem)] grid-flow-row overflow-auto p-6 shadow-md md:hidden animate-in slide-in-from-bottom-96"
      >
      
      <div className="relative h-full z-20 rounded-md bg-popover p-4 text-popover-foreground backdrop-blur-md border-stone-950 border-2">
        <Link href="/">
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <ul className="grid gap-3 p-4 list-none md:w-[400px] text-lg transition-transform duration-100">

          <li className="row-span-3">
        <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <MaskOnIcon className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                  </li>

          <li className="row-span-3">
        <a
                    className={
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
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
    
          <li className="row-span-3">
        <a
                    className={
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
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
      </div>
        </div>
    )
}


const ListItem = React.forwardRef<
React.ElementRef<"a">,
React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
return (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
)
})
ListItem.displayName = "ListItem"





