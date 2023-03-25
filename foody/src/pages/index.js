import Layout from '@/components/Layout'
import Services from '@/components/Services'
import Head from 'next/head'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <Layout>
    <div className={styles.container} >
      <Head>
        <title>Foody</title>
        <meta name="description" content="For your tasty buds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
<main>
<Hero/>
<Services/>
</main>
 

    </div>
    </Layout>

  )
}
