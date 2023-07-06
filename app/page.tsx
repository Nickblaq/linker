import styles from './page.module.css'
import SlimBar from '@/components/sidebar/slim-bar'
import MobileBar from '@/components/popup-bar/mobile-bar'
import HomePage from '@/components/page-home'
export default function Home () {


  return (
    <>
    <div>
      {/* <HomePage /> */}
      <MobileBar />
    </div>
    </>
  )
}
