import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

import styles from '../styles/Pages.module.css';

export default function Objeto({ objeto }) {
    return (
        <div>
            <Head>
                <title>Objetos</title>
            </Head>
            <Header></Header>
            <div className={styles.objetos}>
                <h1> Lista de objetos relacionado a Futebol </h1><br></br>

                {objeto.map((user, index) => (
                    <Link href='/profile/[id]' as={`/profile/${index}`}>
                        <div key={user._id}> <p> {user.nome} </p> </div>
                    </Link>
                ))}
                
            </div>
            <Footer></Footer>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const objeto = await repo;
    return {
        props: { objeto }
    }
})