import Link from 'next/link'
import { Button, Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/router'

const index = ({ store }) => {
    const router = useRouter()
    
    const goBack = () => {
        router.push("/")
    }

    const deleteStore = async () => {
        const storeId = store._id

        try {
            const deleteStore = await fetch(process.env.DOMAIN_NAME + `/api/stores/${storeId}`, { 
                method: 'DELETE'
            })            

            router.push("/")
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>{store.name}</h1>
            <p>{store.email}</p>
            by
            <h2>{store.owner}</h2>
            <p>Location: {store.address}</p>
            <p>About: {store.about}</p>
            <p>Date Added: {store.dateAdded}</p>
            <br/>

            <Row>
                <Col>
                    <Button variant='warning' onClick={goBack}>Back</Button>
                </Col>
                <Col>
                    <Button variant='danger' onClick={deleteStore}>Delete</Button>
                </Col>
                <Col>
                    <Link href='/[id]/edit' as={`/${store._id}/edit`}>            
                        <Button variant='success'>Edit</Button>
                    </Link>
                </Col>
            </Row>          
        </>
    )
}

index.getInitialProps = async (context) => {
    const res = await fetch(process.env.DOMAIN_NAME + `/api/stores/${context.query.id}`)
    const { data } = await res.json()
    
    return {
        store: data
    }
}

export default index
