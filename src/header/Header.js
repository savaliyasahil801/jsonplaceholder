import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/posts">posts</Nav.Link>
                        <Nav.Link href="/Comments">comments</Nav.Link>
                        <Nav.Link href="/albums">albums</Nav.Link>
                        <Nav.Link href="/photos">photos</Nav.Link>
                        <Nav.Link href="/todos">todos</Nav.Link>
                        <Nav.Link href="/users">users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;