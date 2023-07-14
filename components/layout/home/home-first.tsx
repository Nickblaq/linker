import * as React from 'react'

import Link from 'next/link'
import {TopNav} from '@/components/navigation/top-bar'
import { SiteFooter } from '@/components/site-footer'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export default async function HomeFirst () {
    // const items =  NavItems()

  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <TopNav />
      <section className="container h-full flex-1 grid items-start gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-8">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>

        <div className="flex gap-4 pt-6">
        <Link
          href="/"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      </div>
      
    </section>
      <SiteFooter />
      </div>
    </>
  )
}
