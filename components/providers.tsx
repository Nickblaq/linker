// "use client"

// import * as React from "react"
// import { ThemeProvider as NextThemesProvider } from "next-themes"
// import { ThemeProviderProps } from "next-themes/dist/types"
// import { AnimatePresence, motion } from "framer-motion";

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//     const spring = {
//                 type: 'spring',
//                 damping: 20,
//                 stiffness: 100,
//                 when: 'afterChildren'
//               };
//   return
//   <>
//    <AnimatePresence>
//          <motion.div
//               transition={spring}
//               key={router.pathname}
//               initial={{ x: 300, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -300, opacity: 0 }}
//               id="page-transition-container">
//    <NextThemesProvider {...props}>{children}</NextThemesProvider>
//    </motion.div>
//     </AnimatePresence>
//    </>
  
// }



"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}