import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { signOut } from '../../store/actions/authAction'

import Logo from '../../assets/logo.png'

import './index.scss'

class NavBar extends Component {

  logOut = () => {
    this.props.signOut()
  }
  render() {
    const { auth } = this.props
    console.log('status', auth)
    return (
      <div className='main-navbar'>
        <div className='navbar-top'>
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="/"><img src={Logo} alt='logo' /></Navbar.Brand>
              {/* <Navbar.Toggle cl aria-controls="basic-navbar-nav2" /> */}
              <Navbar.Collapse id="basic-navbar-nav2" className='justify-content-end'>
                <span className='info-top'><FontAwesomeIcon icon="clock" /> 09:00 — 17:00</span>
                <span className='info-top'><FontAwesomeIcon icon="phone" /> +381 63 140-64-25</span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className='navbar-bottom'>
          <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/dashboard">Cars</Nav.Link>
                  {auth.uid ? <Nav.Link href="/add-new-car">Add new car</Nav.Link> : null}
                </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
                <Nav className="">
                  {auth.uid ? <Nav.Link href="/profile">Profile</Nav.Link> : null}
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