import styles from './page.module.css'
import Hero from '../components/ui/Hero/Hero'
import Mountain from '../components/ui/Mountain/Mountain'
import Treerow1 from '../components/ui/Treerow1/Treerow1'

export default function Home() {
  return (
    <main className={styles.main}>
    <Hero />
    <Mountain/>
    <Treerow1/>
    </main>
  )
}
