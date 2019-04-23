import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { signOut } from '../../store/actions/authAction'

import Logo from '../../assets/logo.png'

import './index.scss'

class NavBar extends Component {

  logOut = () => {
    this.props.signOut()
  }
  render() {
    const { auth, profile } = this.props
    console.log('status', auth)
    return (
      <div className='main-navbar'>
        <div className='navbar-top'>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><img src={Logo} alt='logo' /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav2" />
              <Navbar.Collapse id="basic-navbar-nav2" className='justify-content-end'>
                <Nav>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>;
        </div>
        <div className='navbar-bottom'>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="/add-new-car">Add Car</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
                <Nav className="">
                  {auth.uid ? <Nav.Link href="/profile">{profile.initial}</Nav.Link> : null}
                  {auth.uid ? <Nav.Link href="/" onClick={this.logOut}>Logout</Nav.Link> : <Navbar.Text>
                    <a href="/login"> Sign In</a>
                  </Navbar.Text>}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div >
    )
  }
}


const mapStateToProps = (state) => {
  console.log('sssss', state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)