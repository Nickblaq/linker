import * as React from 'react'

import Link from 'next/link'
import {TopNav} from '@/components/navigation/top-bar'
import { Shell } from '@/components/shell'
import { HeaderColHeader } from '@/components/header-col'
import DashboardFirst from '@/components/layout/dashboard/dash-first'
import { SesFirst } from '@/components/layout/dashboard/ses-first'

export default async function Home () {

  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <DashboardFirst className='flex-1 h-full'>
        <Shell>
          <HeaderColHeader className="text-left" heading="Hello!" text="Overview dashboard">
          <div className="w-full mx-auto pt-6">
      <SesFirst />
     </div>
          </HeaderColHeader>
        </Shell>
      </DashboardFirst>
     
      </div>
    </>
  )
}
