import React, { Component } from 'react'

class Login extends Component {


  render() {
    return (
      <div>
        <form>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login