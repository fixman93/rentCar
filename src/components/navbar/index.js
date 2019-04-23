import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { signOut } from '../../store/actions/authAction'



class NavBar extends Component {

  logOut = () => {
    this.props.signOut()
  }
  render() {
    const { auth, profile } = this.props
    console.log('status', auth)
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
      </Navbar>
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