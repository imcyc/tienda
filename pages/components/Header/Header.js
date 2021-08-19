import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Header(){
  return(
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home" className="float-left">
        <img src="/logo_imcyc.svg" style={{'width':'150px'}} alt="Tienda del Instituto Mexicano del Cemento y del Concreto A.C." title="Tienda del Instituto Mexicano del Cemento y del Concreto A.C." />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link href="/">INICIO</Link>
        <Link href="/productos">PRODUCTOS</Link>
      </Nav>
      </Container>
    </Navbar>
  )
}