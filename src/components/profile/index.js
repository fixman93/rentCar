import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { Redirect } from 'react-router-dom'
import NavBar from '../navbar/index'

import Container from 'react-bootstrap/Container'

class Profile extends Component {

  render() {
    console.log('auth:', this.props.auth)
    let { user, projects, auth } = this.props
    if (!this.props.auth.uid) {
      return <Redirect to='/' />
    }
    let carListt = []
    if (projects) {

      const carList = projects
      carListt = carList.filter((item) => {
        console.log(item)
        console.log('iiiiiii', auth.uid)
        return item.authhorId === auth.uid

      })
      console.log('dsadsadas', carListt)

    }
    return (
      <div>
        <NavBar />
        <Container>
          <h1>Profile</h1>
          <h2>{user.firstName} {user.lastName}</h2>
          <ul>
            {carListt.map((project, i) => {
              return (
                <li key={i}>{project.carName}</li>
              )
            })}
          </ul>
        </Container>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    user: state.firebase.profile,
    projects: state.firestore.ordered.project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users' },
    { collection: 'project', orderBy: ['createdAt', 'desc'] }
  ])
)(Profile)