import styles from './page.module.css'
import SlimBar from '@/components/sidebar/slim-bar'
import MobileBar from '@/components/popup-bar/mobile-bar'
export default function Home () {


  return (
    <>
    <div className={styles.main}>
      <MobileBar />
    </div>
    </>
  )
}
