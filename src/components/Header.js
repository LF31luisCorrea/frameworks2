import styles from '../styles/Components.module.css'


export default function Header({objeto}) {
    return (
        <div className={styles.header}>
            <nav className={styles.nav}>
                <h1>Sou bocaweb</h1>
                <a href='/'>Página inicial</a>
                <a href='/objeto'>Objetos</a>
                <a href='/descricao'>Descrição</a>
            </nav>

        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=escola')
    const repo = await res.json()
    const objeto = await repo;
    return {
        props: { objeto }
    }
})