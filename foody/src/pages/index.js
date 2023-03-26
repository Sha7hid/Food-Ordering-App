import Layout from '@/components/Layout'
import Menu from '@/components/Menu'
import Services from '@/components/Services'
import { client } from 'lib/client'
import Head from 'next/head'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
export default function Home(pizzas) {

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
<Menu pizzas={pizzas.pizzas}/>
</main>
 

    </div>
    </Layout>

  )
}

export const getServerSideProps = async() => {
  const query = '*[_type == "pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props: {
      pizzas
    }
  }
}