import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Nav from '../components/nav'
import Hero from '../components/hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Released | New Music, Get Notified</title>
        <meta name="description" content="A release radar platform for new music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <Hero />
      </main>

      <footer className={styles.footer}>
        <Link
          href="\terms"
        >
          Terms and conditions
        </Link>
      </footer>
    </div>
  )
}
