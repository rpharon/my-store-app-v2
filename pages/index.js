import StoreList from '../components/StoreList'
import styles from '../styles/Home.module.css'

const index = ({ stores }) => {
  return (
    <>
      <StoreList stores={ stores }/>
    </>
  )
}

index.getInitialProps = async () => {
  const res = await fetch(process.env.DOMAIN_NAME + `/api/stores`)
  const { data } = await res.json()

  return {
    stores: data
  }
}

export default index