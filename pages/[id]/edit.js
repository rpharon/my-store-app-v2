import { Button, Row, Col, Container } from 'react-bootstrap'
import { useRouter } from 'next/router'

const edit = ({ store }) => {
    const router = useRouter()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const owner = e.target.owner.value
        const address = e.target.address.value
        const about = e.target.about.value

        try {
            const editStore = await fetch(process.env.DOMAIN_NAME + `/api/stores/${store._id}`, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    owner: owner,
                    address: address,
                    about: about
                })
            })

            router.push('/')
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Row className='py-2'>
                    <h3>Update Store Details:</h3>
                </Row>

                <Row className='py-2'>
                    <Col>
                        <label>Store name:</label>
                    </Col>
                    <Col>
                        <input  
                            type='text'
                            id='name'
                            name='name'
                            defaultValue={store.name}/>
                    </Col>
                </Row>

                <Row className='py-2'>
                    <Col>
                        <label>Email address</label>
                    </Col>
                    <Col>
                        <input  
                            type='text'
                            id='email'
                            name='email'
                            defaultValue={store.email}/>
                    </Col>
                </Row>

                <Row className='py-2'>
                    <Col>                    
                        <label>Owner name:</label>
                    </Col>
                    <Col>
                        <input  
                            type='text'
                            name='owner'
                            defaultValue={store.owner}/>
                    </Col>
                </Row>

                <Row className='py-2'>
                    <Col>                    
                        <label>Address:</label>
                    </Col>
                    <Col>
                        <input  
                            type='text'
                            name='address'
                            defaultValue={store.address}/>
                    </Col>
                </Row>

                <Row className='py-2'>
                    <Col>                    
                        <label>About:</label>
                    </Col>
                    <Col>
                        <textarea   
                                type='text'
                                name='about'
                                defaultValue={store.about}/>                   
                    </Col>
                </Row>

                <Row className='py-2'>
                    <Button 
                        variant='success'
                        type='submit'>Submit</Button>
                </Row>
            </form>  
        </>
    )
}

edit.getInitialProps = async (context) => {
    const res = await fetch(process.env.DOMAIN_NAME + `/api/stores/${context.query.id}`)
    const { data } = await res.json()
    
    return {
        store: data
    }
}

export default edit
