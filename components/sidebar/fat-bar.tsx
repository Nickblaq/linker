
'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

 import { Label } from '@/components/ui/label'
 import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { 
     Pencil2Icon,
     GitHubLogoIcon,
     TwitterLogoIcon,
     GearIcon,
     PaperPlaneIcon,
     SunIcon,
     HamburgerMenuIcon,
     MoonIcon,
       } from '@radix-ui/react-icons'
import { ModeToggle } from '../mode-toggle'
export default function FatBar () {
  const [open, close] = React.useState(false)
  const path = usePathname()


  return (
    <>
    <nav className='h-full'>
    <div 
    className='relative min-h-full z-50 w-48 hidden md:flex  flex-col justify-between gap-8 h-screen py-16 border-r border-gray-700 dark:border-gray-200 px-8'>
        {/* Header */}
      {/* <div>
      </div> */}

    <div className='flex flex-col  items-center justify-center gap-8'>
        {/* Middle */}
      <div  className={cn( 'flex items-center gap-4 w-full',
            // path === '/' ? 'animate-pulse' : ''
)}>
        <Pencil2Icon className='h-7 w-7' />
        <p className='font-semibold text-xl text-[#eee] leading-5 tracking-widest'>Editor</p>
      </div>
    </div>

          {/* Footer */}
          <div className='flex flex-col items-center justify-center gap-8'>
          <ModeToggle />
          </div>
    </div>
    </nav>
    </>
  )
}