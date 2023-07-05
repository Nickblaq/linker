
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
export default function SlimBar () {
  const [open, close] = React.useState(false)
  const path = usePathname()


  return (
    <>
    <nav>

    <TooltipProvider>
    <div 
    className={cn(
      'relative min-h-full z-50 flex items-center flex-col justify-between gap-8 h-screen w-[60px] py-16 border-r border-gray-200 px-8',
    )}>
  
      {/* <div>
      <Tooltip>
         <TooltipTrigger>
         <Label> <HamburgerMenuIcon className='h-6 w-6' /> </Label>
          </TooltipTrigger>
          <TooltipContent 
           align="center"
           className="bg-[#111] rounded-[10px] ml-[2px] py-[6px] px-[10px] "
           side="right"
          >
            <p className='font-bold text-xs text-[#eee] leading-5 tracking-widest'>Expand</p>
        
          </TooltipContent>
          </Tooltip>
      </div> */}
      <div className='flex flex-col flex-1 items-center justify-center gap-8'>
      <Tooltip>
         <TooltipTrigger>
        <Label> <Pencil2Icon className={cn(
          'h-6 w-6',
          path === '/' ? 'animate-pulse' : ''
        )} /> </Label>
          </TooltipTrigger>
          <TooltipContent 
           align="center"
           className="bg-[#111] rounded-[10px] ml-[2px] py-[6px] px-[10px] "
           side="right"
          >
            <p className='font-bold text-xs text-[#eee] leading-5 tracking-widest'>Editor</p>
        
          </TooltipContent>
          </Tooltip>
      <Tooltip>
         <TooltipTrigger>
         <Label> <PaperPlaneIcon className='h-6 w-6 -rotate-45  ml-3' /> </Label>
          </TooltipTrigger>
          <TooltipContent 
           align="center"
           className="bg-[#111] rounded-[10px] ml-[2px] py-[6px] px-[10px] "
           side="right"
          >
            <p className='font-bold text-xs text-[#eee] leading-5 tracking-widest'>Messages</p>
        
          </TooltipContent>
          </Tooltip>
      <Tooltip>
         <TooltipTrigger>
         <Label> <GitHubLogoIcon className='h-6 w-6 ' /> </Label>
          </TooltipTrigger>
          <TooltipContent 
           align="center"
           className="bg-[#111] rounded-[10px] ml-[2px] py-[6px] px-[10px] "
           side="right"
          >
            <p className='font-bold text-xs text-[#eee] leading-5 tracking-widest'>Github</p>
        
          </TooltipContent>
          </Tooltip>
      <Tooltip>
         <TooltipTrigger>
         <Label> <TwitterLogoIcon className='h-6 w-6' /> </Label>
          </TooltipTrigger>
          <TooltipContent 
           align="center"
           className="bg-[#111] rounded-[10px] ml-[2px] py-[6px] px-[10px] "
           side="right"
          >
            <p className='font-bold text-xs text-[#eee] leading-5 tracking-widest'>Twitter</p>
        
          </TooltipContent>
          </Tooltip>
          </div>
          <div className='flex flex-col items-center justify-center gap-8'>
  
          <Tooltip>
         <TooltipTrigger>
         <Label> <MoonIcon className='h-6 w-6' /> </Label>
          </TooltipTrigger>
          <TooltipContent 
           align="start"
           className="bg-[#111] rounded-[10px] ml-[2px] py-[6px] px-[10px] "
           side="right"
          >
            <p className='font-bold text-xs text-[#eee] leading-5 tracking-widest'>Mode</p>
        
          </TooltipContent>
          </Tooltip>


          
          <Tooltip>
         <TooltipTrigger>
         <Label> <GearIcon className='h-6 w-6' /> </Label>
          </TooltipTrigger>
          <TooltipContent 
           align="start"
           className="bg-[#111] rounded-[10px] ml-[2px] py-[6px] px-[10px] "
           side="right">
          <p className='font-bold text-xs text-[#eee] leading-5 tracking-widest'>Settings</p>
          </TooltipContent>
          </Tooltip>
          
          </div>
    </div>
    </TooltipProvider>
    </nav>
    </>
  )
}