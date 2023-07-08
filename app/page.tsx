import styles from './page.module.css'
// import SlimBar from '@/components/sidebar/slim-bar'

// import HomePage from '@/components/page-home'
// import PageHeader from '@/components/page-header'
// import { MainNav } from '@/components/page-navbar'
// import { NavItems } from '@/lib/items'
import ButtonIcon from '@/components/custom/button-icon'
export default async function Home () {
    // const items =  NavItems()

  return (
    <>
     <div className="min-h-screen mx-auto px-2">
     <div className="border border-[hsla(0,0%,100%,.1)] ">
     <ul className="grid gap-3 p-4 list-none md:w-[400px] text-lg transition-transform duration-100">

<li className="row-span-3">
<a
          className="flex h-full w-full select-none flex-col justify-end rounded-md border border-[hsla(0,0%,100%,.1)] bg-gradient-to-b from-[#333]/50 to-[#333] p-6 no-underline outline-none focus:shadow-md"
          href="/"
        >

          <div className="mb-2 mt-4 text-lg font-medium text-[#bbb]">
            shadcn/ui
          </div>
          <p className="text-sm leading-tight text-muted-foreground text-[#888]">
            Beautifully designed components built with Radix UI and
            Tailwind CSS.
          </p>
        </a>
        </li>

<li className="row-span-3 text-[#bbb]">
<a
          className={
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
          href="/"
        >
          <div className="mb-2 mt-4 text-lg font-medium">
            shadcn/ui
          </div>
          <p className="text-sm leading-tight text-muted-foreground text-[#888]">
            Beautifully designed components built with Radix UI and
            Tailwind CSS.
          </p>
        </a>
        </li>

<li className="row-span-3">
<a
          className={
            "hover:border border-[hsla(0,0%,100%,.1)] hover:bg-gradient-to-b from-[#333]/50 to-[#333] block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
          href="/"
        >
          <div className="mb-2 mt-4 text-lg font-medium">
            shadcn/ui
          </div>
          <p className="text-sm leading-tight text-muted-foreground">
            Beautifully designed components built with Radix UI and
            Tailwind CSS.
          </p>
        </a>
        </li>

        <li className="row-span-3">
<a
          className={
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
          href="/"
        >
          <div className="mb-2 mt-4 text-lg font-medium">
            shadcn/ui
          </div>
          <p className="text-sm leading-tight text-muted-foreground">
            Beautifully designed components built with Radix UI and
            Tailwind CSS.
          </p>
        </a>
        </li>

        <li className="row-span-3 text-[#bbb]">
<a
          className={
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
          href="/"
        >
          <div className="mb-2 mt-4 text-lg font-medium">
            shadcn/ui
          </div>
          <p className="text-sm leading-tight text-muted-foreground text-[#888]">
            Beautifully designed components built with Radix UI and
            Tailwind CSS.
          </p>
        </a>
        </li>

        <li className="row-span-3">
<a
          className="flex h-full w-full select-none flex-col justify-end rounded-md border border-[hsla(0,0%,100%,.1)] bg-gradient-to-b from-[#333]/50 to-[#333] p-6 no-underline outline-none focus:shadow-md"
          href="/"
        >

          <div className="mb-2 mt-4 text-lg font-medium text-[#bbb]">
            shadcn/ui
          </div>
          <p className="text-sm leading-tight text-muted-foreground text-[#888]">
            Beautifully designed components built with Radix UI and
            Tailwind CSS.
          </p>
        </a>
        </li>
        </ul>
</div>
      <ButtonIcon />
    </div>
    </>
  )
}
