import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut, signUp } from '../../store/actions/authAction'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import { Redirect } from 'react-router-dom'

import NavBar from '../navbar/index'

class Login extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
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
        <NavBar />
        <Container>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="login" title="Login">
              {/* <Sonnet /> */}
              <form onSubmit={this.handleSubmit}>
                <input type='email' placeholder='email' name='email' onChange={this.handleChange} />
                <input type='password' placeholder='password' name='password' onChange={this.handleChange} />
                <button>Login</button>
              </form>
            </Tab>
            <Tab eventKey="register" title="Register">
              <form onSubmit={this.handleSignUp}>
                <input type='text' placeholder='Your first name' name='firstName' onChange={this.handleChange} />
                <input type='text' placeholder='Your last name' name='lastName' onChange={this.handleChange} />
                <input type='email' placeholder='email' name='email' onChange={this.handleChange} />
                <input type='password' placeholder='password' name='password' onChange={this.handleChange} />
                <button>Register</button>
                {this.props.authError ? <p>{this.props.authError}</p> : null}
              </form>
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