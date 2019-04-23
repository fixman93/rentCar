import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NavBar from '../navbar/index'

class Profile extends Component {

  render() {
    if (!this.props.auth.uid) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <NavBar />
        Profile
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Profile)