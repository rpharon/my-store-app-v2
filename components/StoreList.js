import Store from '../components/Store'
import styles from '../styles/Home.module.css'

const StoreList = ({ stores }) => {
    return (
        <div className={styles.grid}>
            { stores.map((store) => (
                <Store key={store._id} store={store}/>
            ))}
        </div>
    )
}

export default StoreList
