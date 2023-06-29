// import '@/styles/global.css'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
// import localFont from "next/font/local"


import PageHeader from '@/components/page-header'
import { ThemeProvider } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { MainNav } from '@/components/page-navbar'
import { Icons } from '@/components/icons'



export const headeritems: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const items = headeritems;
  return (
    <html lang="en" className='h-full overflow-x-hidden' suppressHydrationWarning={true}>
      <body 
       className={cn(
        "min-h-screen font-serif antialiased h-full container  overflow-x-hidden",
        
      )}
      >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <header className='sticky top-0 z-40 border-b bg-background'>
          <div className="flex h-16 items-center justify-between py-4">
            <MainNav items={headeritems} />
            
          </div>
        </header>
       <main>
        {/* < MainNav items={items} /> */}
        {children}
        </main> 
        <footer className="footer">
        <span className="footer__img">ℹ️</span>
        <a
          className="footer__link"
          href="https://joebell.co.uk/sketches/loading-disco"
          target="_blank"
          rel="noopener"
        >
          See the full demo
        </a>
      </footer>
       <Toaster />
       </ThemeProvider>
        </body>
    </html>
  )
}
