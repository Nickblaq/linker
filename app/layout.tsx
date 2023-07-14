import './globals.css'
// import '@/styles/global.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers'
import { Metadata } from "next"
const inter = Inter({ subsets: ['latin'] })
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    default: 'Linker',
    template: `%s - Linker`,
  },
  description: 'Description',
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
        ' min-h-screen bg-gradient-to-b from-[#fff]/90 to-[#fff] text-gray-700 dark:text-gray-200 dark:from-[#222]/50 dark:to-[#222]',
        inter.className
      )}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* <Navbar /> */}
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}