import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Head from 'next/head'

import styles from '../../styles/Pages.module.css';

export default function Pasta({ objeto = {} }) {
    return (
        <div>
            <Head>
                <title>Descricao</title>
            </Head>
            <Header></Header>
            <div className={styles.descricao}>
                <h1>{objeto.nome}</h1><hr></hr>
                <p>Editor: {objeto.usuario}</p><br></br>
                <p>{objeto.descricao}</p>
            </div>
            <Footer></Footer>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const objeto = await repo[context.params.id];
    return {
        props: { objeto }
    }
})

export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((obj, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}
