import Layout from '../components/Layout'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default MyApp