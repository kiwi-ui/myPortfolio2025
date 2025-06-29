import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  return (
     <Navbar expand="lg" className="">
        <Container className="">
            <Navbar.Brand as={Link} className="d-flex flex-row gap-3 align-items-center" to="/">
                <a className="p-2 rounded-3 text-white fs-4 fw-bold" style={{background: "rgb(4,68,144)"}}>YA</a>
                <Navbar.Collapse className="align-items-start my-2 flex-column text-start">
                    <p className="mb-0 fw-semibold d-block">Yusni Anggara</p>
                    <p className="mb-0 text-secondary d-block">Developer</p>
                </Navbar.Collapse>
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
