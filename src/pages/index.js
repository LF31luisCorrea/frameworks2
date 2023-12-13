import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';


export default function Home() {
  return (
    <>
      <Head>
        <title>Boca web</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className={styles.home}>
        <h1>Boca Web</h1>
        <h3>Conheça sobre o projeto bocaweb! É um site desenvolvido aonde bandeiras, bandeiras, capas de livros são descritos para pessoas que não possuem visão. Este projeto mostrará as descrição desse site feito no âmbito do futebol.</h3>
      </div>
      <Footer></Footer>
    </>
  )
}