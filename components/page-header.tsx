'use client'

import * as React from 'react'
import { Icons } from "./icons";
import { Button } from "./ui/button";


 const items: { title: string; href: string; description: string }[] = [
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

export default function PageHeader() {
   const [show, hide] = React.useState(true)
    return(
        <>
        <div className="px-4">
    <div className="flex items-center justify-between h-16">
      <h2 className="text-3xl font-bold">Craft UI</h2>
      <Button variant="outline" size="icon" className="">
      <Icons.hamburger className="h-full w-full" />
      </Button>
    </div>
    </div>
   {show ? <NavMenu /> : null} 
        </>
    )
}

const NavMenu = () => {
  return (
    <>
    <div>
    <header className="fixed inset-0 top-16 z-50 h-full border rounded-xl mx-1 bg-black">
      <div className="container flex h-16 items-center justify-between py-4">
      <ul className=" p-4 text-white">
              {items.map((component) => (
                <li
                  key={component.title}
                  title={component.title}
                >
                  {component.title}
                </li>
              ))}
              </ul>
      </div>
      </header> 
    </div>
    </>
  )
}




    // Build popup full screen menu on mobile phones
{/* <header className="sticky top-0 z-40 border-b bg-background">
<div className="container flex h-16 items-center justify-between py-4">
</div>
 </header> 


-- Another one still same as above but with calc fixed inset-0 top-16 z-50  h-[calc(100vh-4rem)]
*/}