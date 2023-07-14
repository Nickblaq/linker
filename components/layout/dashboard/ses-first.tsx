'use client'

import * as React from 'react'
import { QrCode } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from '@/components/icons';
import  ChartPie  from '@/components/chart';
import { Separator } from '@/components/ui/separator';
const MotionDiv = motion.div

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    };
  }
};

const MotionBox = ({children})=> {
  return (
    <>
    <MotionDiv variants={variants} initial='enter' animate='center' exit='exit'>
      {children}
    </MotionDiv>
    </>
  )
}

export function SesFirst() {
  const [[page, direction], setPage] = React.useState([0, 0]);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

    return (
      <>
      <Card>
          <CardContent>  
      <div className="w-full py-6 ">
        <div className="flex items-center justify-between">
          <div  className="font-bold text-3xl">
            <p>1,999.00</p>
            <p className=" indent-2 font-normal text-sm text-muted-foreground">USD savings</p>
            </div>
            <div className="flex flex-col items-center">
              <QrCode className="h-12 w-12" />
            
            <p className="font-normal text-sm text-muted-foreground">Deposit</p>
            </div>
        </div>
        </div>
        
              {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
        <div className="col-span-4"><ChartPie /></div>
        <div className="col-span-3"></div>
        </div> */}
        </CardContent>

        <CardFooter className='flex justify-between items-center gap-1 w-full h-full '>
        <Icons.arrowup className='h-9 w-9  ml-2 border' />
          <Icons.arrowdown className='h-9 w-9 ml-2 border' />
          <Icons.biarrow className='h-9 w-9 ml-2 border' />
        </CardFooter>
       
      </Card>



      <section className="grid items-start gap-6 py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-8">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
        </div>
        </section>
              </>
    )
  }
