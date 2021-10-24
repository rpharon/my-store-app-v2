import styles from '../styles/Home.module.css'

const Header = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>MyStore</h1>
            <p className={styles.description}>Your daily online store.</p>
        </div>
    )
}

export default Header
