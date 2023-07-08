'use client'
import * as React from 'react'

import { TextAlignLeftIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { MainNavItem } from '@/types'
import { MobileNav } from '../page-navbar'
import { useSelectedLayoutSegment } from 'next/navigation'
  interface NavProps {
    items: MainNavItem[]
}

export default function ButtonNav ({ items }: NavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
    return (
        <>
      
       <Button
       onClick={() => setShowMobileMenu(!showMobileMenu)}
        className='fixed bottom-6 left-6 z-50 rounded-[50%] h-12 w-12 bg-[#333] text-[#eee] flex items-center justify-center  border border-gray-200' variant="outline" size="icon">
      <TextAlignLeftIcon className="h-6 w-6 flex items-center justify-center" />
    </Button>
      
    {showMobileMenu && items && (
        <MobileNav items={items} />
      )}
        </>
    )
}