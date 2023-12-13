import React from 'react';
import Head from 'next/head';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Pages.module.css';

export default function Descricao({ descricao }) {
    return (
        <div>
            <Head>
                <title>Objetos</title>
            </Head>
            <Header></Header>
            <div className={styles.descricaos}>
                <h1> Descricao de objetos </h1><br></br>

                {descricao.map((user, index) => (
                    <div key={index}>
                        <h2>{user.nome}</h2>
                        <p>{user.descricao}</p>
                        <br></br>
                    </div>
                ))}

            </div>
            <Footer></Footer>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const descricao = await repo;
    return {
        props: { descricao }
    }
})