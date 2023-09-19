import { Container,Navbar,NavDropdown,Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContex'
import CartWidget from '../CartWidget/CartWidget'
// import { Navbar } from 'react-bootstrap/Navbar'
// import { NavDropdown } from 'react-bootstrap/NavDropdown'
// import { Nav } from 'react-bootstrap/Nav'

const array = [
    {idCategoria: '1', name: 'remeras', nameButton: 'Remeras'},
    {idCategoria: '2', name: 'gorras', nameButton: 'Gorras'}
    // {idCategoria: '3', name: 'pantalon', nameButton: 'Pantalones'},
]
const NavBar = () => {
    // console.log(children)
    const { cantidadTotal } = useCartContext()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{color: 'white'}}>
                <Container>
                <NavLink 
                    to="/" 
                    // className={ ({isActive}) => isActive ? 'AlgunaClase' : 'otraClase'}
                >React-Bootstrap</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {array.map(param => <NavLink key={param.id} to={`/categoria/${param.name}`}>{param.nameButton}</NavLink>) }
                    
                </Nav>
                
                </Navbar.Collapse>
                {cantidadTotal() !== 0 && cantidadTotal()}
                <CartWidget/>
                </Container>
            </Navbar>           
        </>
    )
}

export default NavBar