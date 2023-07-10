import * as React from 'react'

import styles from './page.module.css'
import Shield from '@/components/shied'
import { MainNav } from '@/components/page-navbar'
import { MobileNav } from '@/components/custom/button-icon'
import SlimBar from '@/components/sidebar/slim-bar'
import FatBar from '@/components/sidebar/fat-bar'
import { Card, CardTitle, CardDescription, CardContent, CardHeader} from '@/components/ui/card'
import { RecentUsers } from '@/components/resent-users'
import ChartPie from '@/components/chart'
import { LineChart } from '@/components/line-chart'
import { Badge } from "@/components/ui/badge"
export default async function Home () {
    // const items =  NavItems()

  return (
    <>
  <div className='flex h-full w-full'>
    <FatBar />
    <section className='relative min-h-full w-full bg-[rgba(255, 255, 255, 0.9)] overflow-y-autoflex-1 m-3 px-6 border'>
      <div className='flex flex-col'>
      <h1 className='font-extrabold text-7xl py-10 px-8'>Welcome, Henry</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Assets overview</CardTitle>
                    <CardDescription className='flex items-center gap-6 pt-6'>

                      <div>
                        <h2 className='text-2xl font-sans font-bold'>$111,111,000</h2>
                        <div className='flex items-center gap-1'>
                        <span className=' rounded-[50%] h-3 w-3 bg-[rgb(255,187,40)]'></span>
                        <p className='text-base font-normal'>Current</p>
                        </div>
                      </div>

                      <div>
                      <h2 className='text-2xl font-sans font-bold'>$111,111,000</h2>
                        <div className='flex items-center gap-1'>
                        <span className=' rounded-[50%] h-3 w-3 bg-[rgb(0,196,159)]'></span>
                        <p className='text-base font-normal'>Allocated</p>
                        </div>
                      </div>

                      <div>
                      <h2 className='text-2xl font-sans font-bold'>$12,000</h2>
                        <div className='flex items-center gap-1'>
                        <span className=' rounded-[50%] h-3 w-3 bg-[rgb(255,128,66)]'></span>
                        <p className='text-base font-normal'>Interest</p>
                        </div>
                      </div>

                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <React.Suspense>
                    <ChartPie />
                    </React.Suspense>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <React.Suspense>
                    <LineChart />
                    </React.Suspense>
                  </CardContent>
                </Card>
              </div>
      </div>
    </section>
    </div>
    </>
  )
}
