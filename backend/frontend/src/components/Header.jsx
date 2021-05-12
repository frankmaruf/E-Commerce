import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {useDispatch,useSelector} from "react-redux"
import { LinkContainer } from 'react-router-bootstrap'
import {FaShoppingCart, FaUser} from "react-icons/fa"
import {NavLink} from "react-router-dom"
import {logout} from "../actions/userAction"

const Header = () => {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const dispatch = useDispatch()

    const logoutHandler =() =>{
        dispatch(logout())
    }


    return (
        <React.Fragment>
            <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
      <NavLink to="/">
      <Navbar.Brand>ProShop</Navbar.Brand>
      </NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to="/cart">
      <Nav.Link><FaShoppingCart/>Cart</Nav.Link></LinkContainer>

      {userInfo ? (
        <NavDropdown title={userInfo.name} id='username'>
            <LinkContainer to="/profile">
                <NavDropdown.Item>
                  Profile
                </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
        </NavDropdown>
      ) : (
        <LinkContainer to="/login">
        <Nav.Link><FaUser/>Login</Nav.Link>
        </LinkContainer>
      )}


    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
            </header>
        </React.Fragment>
    )
}

export default Header