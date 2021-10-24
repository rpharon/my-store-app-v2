import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Store = ({ store }) => {
    return (
        <Link href='/[id]' as={`/${store._id}`}>
            <a className={styles.card}>
                <h3>{store.name}</h3>
                <p>{store.address}</p>
            </a>
        </Link>
    )
}

export default Store
