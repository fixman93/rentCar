import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut, signUp } from '../../store/actions/authAction'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom'

import './index.scss'
class Login extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }

  componentWillMount() {
    console.log('a', this.props.auth.uid)

  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signIn(this.state)
  }
  handleSignUp = (e) => {
    e.preventDefault()
    this.props.signUp(this.state)
  }
  render() {
    console.log(this.props.auth)
    if (this.props.auth.uid) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <Container className='login-page'>
          <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
            <Tab eventKey="login" title="Login">
              {/* <Sonnet /> */}

              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name='email' value={this.state.userEmail} onChange={this.handleChange} placeholder='Your email' />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name='password' value={this.state.password} onChange={this.handleChange} placeholder='Your password' />
                </Form.Group>
                <Button type='submit' variant="primary">Login</Button>
              </Form>
            </Tab>
            <Tab eventKey="register" title="Register">
              <Form onSubmit={this.handleSignUp}>
                <Form.Group controlId="formBasicfirstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name='firstName' value={this.state.firstName} onChange={this.handleChange} placeholder='Your first name' />
                </Form.Group>
                <Form.Group controlId="formBasiclastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name='lastName' value={this.state.lastName} onChange={this.handleChange} placeholder='Your last name' />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name='email' value={this.state.userEmail} onChange={this.handleChange} placeholder='Your email' />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name='password' value={this.state.password} onChange={this.handleChange} placeholder='Your password' />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} placeholder='Your phone number' />
                </Form.Group>
                <Button type='submit' variant="primary">Register</Button>
                {this.props.authError ? <p>{this.props.authError}</p> : null}
              </Form>
            </Tab>
          </Tabs>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signUp: (creds) => dispatch(signUp(creds)),
    signOut: () => dispatch(signOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)