import styles from './page.module.css'
import SlimBar from '@/components/sidebar/slim-bar'
import MobileBar from '@/components/popup-bar/mobile-bar'
import HomePage from '@/components/page-home'
import PageHeader from '@/components/page-header'
import { MainNav } from '@/components/page-navbar'
import { NavItems } from '@/lib/items'
export default async function Home () {
    const items =  NavItems()

  return (
    <>
    <div>
      {/* <HomePage /> */}
      <MobileBar items={items} />
      {/* <PageHeader /> */}
      <MainNav items={items} />
       {/* <SlimBar  /> */}
    </div>
    </>
  )
}
