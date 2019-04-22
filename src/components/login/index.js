import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../store/actions/authAction'

class Login extends Component {

  state = {
    email: '',
    password: ''
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
  logOut = () => {
    this.props.signOut()
  }
  render() {
    console.log(this.props.auth)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='email' placeholder='email' name='email' onChange={this.handleChange} />
          <input type='password' placeholder='password' name='password' onChange={this.handleChange} />
          <button>Login</button>
        </form>
        <div className='logout' onClick={this.logOut}>LogOut</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signOut: () => dispatch(signOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)