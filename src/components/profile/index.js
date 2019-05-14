import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { Redirect } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './index.scss'
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
        return item.authhorId === auth.uid

      })

    }
    return (
      <div className='profile'>
        <Container className='profile-page'>
          <h1>Profile</h1>
          <h2>{user.firstName} {user.lastName}</h2>
          <div className='user-info'>
            <p><span>Tel:</span> {user.phoneNumber}</p>
            <p><span>Email:</span> {auth.email}</p>
          </div>
          <Row>
            {carListt.map((project, i) => {
              return (
                <Col sm={4} key={i}>
                  <div className='profileItems'>
                    <img src={project.userImage} alt='Car' />
                    <h3>{project.carType} {project.carModel}</h3>
                    <em>REVIEW:</em>
                    <span className='feedback'>{project.feedback}</span>
                    <p>Price: {project.carPrice} {project.Currency}</p>
                    <p>Type: {project.carType} </p>
                    <p>Model: {project.carModel}</p>
                  </div>
                </Col>
              )
            })}
          </Row>
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