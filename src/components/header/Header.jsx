import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom";
import ya from '../../assets/ya.png';
const Header = () => {
  const location = useLocation();
  
  return (
     <Navbar expand="lg" className="mt-3">
        <Container className="">
            <Navbar.Brand as={Link} className="d-flex flex-row gap-3 align-items-center" to="/">
                <img src={ya} alt="Yusni Anggara Logo" className="" style={{ width: "50px", height: "50px" }} />
            </Navbar.Brand>
            
            <Nav justify variant="underline" className="flex-row justify-content-center">
                <Link className={`fs-5 nav-link ${location.pathname === '/' ? "active fw-semibold   " : ""}`} to="/">Home</Link>
                <Link className={`fs-5 nav-link ${location.pathname === '/works' ? "active fw-semibold" : ""}`} to="/works">Works</Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
