import styles from './navbar.module.css'
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

export default function Navbar () {

    return (
        <>
        <div className={styles.description}>
            <h1>NQ</h1>
            <div>
                <GitHubLogoIcon />
                <TwitterLogoIcon />
            </div>
        </div>
        </>
    )
}