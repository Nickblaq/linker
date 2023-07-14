'use client'

import { TopNav } from "@/components/navigation/top-bar"
import { SiteFooter } from "@/components/site-footer"
import { UserAccountNav } from "@/components/user-account-nav"
import { cn } from "@/lib/utils"

interface DashboardFirstProps {
    children?: React.ReactNode,
    className?: string
  }
export default function DashboardFirst ({
    children,
    className
  }: DashboardFirstProps) {

    return (
        <>
         <div className={cn("flex flex-col space-y-6", className)}>
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <TopNav  />
          <UserAccountNav
            user={{
              name: "Nick John",
              // image: 'User Image',
              email: "user@example.com",
            }}
          />
        </div>
      </header>
      <div className="container md:grid md:flex-1 md:gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          {/* <SmallNav items={navbarConfig} /> */}
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
    {/* <SiteFooter /> */}
        </>
    )
}