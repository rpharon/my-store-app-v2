import Link from 'next/link'
import { Container, Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">MyStore</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/new">Create</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
