import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {useDispatch,useSelector} from "react-redux"
import { LinkContainer } from 'react-router-bootstrap'
import {FaShoppingCart, FaUser} from "react-icons/fa"
import {NavLink} from "react-router-dom"
import {logout} from "../actions/userAction"
import SearchBox from './SearchBox'

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
      <Navbar.Brand>yooshop</Navbar.Brand>
      </NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <SearchBox/>
    <Nav className="ml-auto">
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
      {
        userInfo && userInfo.isAdmin && (
          <NavDropdown title="Admin" id='adminmenue'>
            <LinkContainer to="/admin/userslist">
                <NavDropdown.Item>
                  Users
                </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/admin/productslist">
                <NavDropdown.Item>
                  Products
                </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/admin/orderslist">
                <NavDropdown.Item>
                  Orders
                </NavDropdown.Item>
            </LinkContainer>
        </NavDropdown>
        )
      }


    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
            </header>
        </React.Fragment>
    )
}

export default Header
