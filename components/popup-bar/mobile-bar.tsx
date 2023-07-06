import * as React from 'react'
import styles from './mobile-bar.module.css'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { TextAlignLeftIcon } from '@radix-ui/react-icons'
  import { Button } from '../ui/button'


export default function MobileBar () {
    return (
        <>
        <div className=''>
       <Button className='fixed bottom-6 left-6 z-50 rounded-[50%] h-12 w-12 bg-[#333] text-[#eee] flex items-center justify-center  border border-gray-200' variant="outline" size="icon">
      <TextAlignLeftIcon className="h-6 w-6 flex items-center justify-center" />
    </Button>
      </div>  
        {/* <div className='fixed h-12 w-[60px] bottom-6 mb-10 left-3 rounded-[50%] z-50 border border-gray-200'>

            <HamburgerMenuIcon className={'w-7 h-7 mx-auto'}/>
    
        </div>  */}
        </>
    )
}