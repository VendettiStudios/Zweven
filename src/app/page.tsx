import styles from './page.module.css'
import Hero from '../components/ui/Hero/Hero'
import Mountain from '../components/ui/Mountain/Mountain'

export default function Home() {
  return (
    <main className={styles.main}>
    <Hero />
    {/* <Mountain/> */}
    </main>
  )
}
