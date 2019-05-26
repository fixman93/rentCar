import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

import { Redirect } from 'react-router-dom'
import moment from 'moment'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './index.scss'
class Profile extends Component {

  componentWillReceiveProps(newProps) {
    this.setState({
      messages: newProps.messages
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }
  render() {
    let { user, projects, auth } = this.props
    let { messages } = this.state
    if (!this.props.auth.uid) {
      return <Redirect to='/' />
    }
    let carListt = []
    if (projects) {

      const carList = projects
      carListt = carList.filter((item) => {
        return item.authhorId === auth.uid
      })
    }
    console.log('sdsa', messages)
    let myMessages = []
    if (messages) {
      myMessages = Object.values(messages).filter((item) => {
        return item.OwnerID === auth.uid
      })
    }
    console.log('MYMESSAGES', myMessages)
    return (
      <div className='profile'>
        <Container className='profile-page'>
          <h1>Profile</h1>
          <h2>{user.firstName} {user.lastName}</h2>
          <div className='user-info'>
            <p><span>Tel:</span> {user.phoneNumber}</p>
            <p><span>Email:</span> {auth.email}</p>
          </div>
          <div className='user-messages'>
            <ul>
              {myMessages ? myMessages.map((message, i) => {
                return (
                  <li key={i}>
                    <p>City: {message.Email}</p>
                    <p>Phone Number: {message.phoneNumber}</p>
                    <p>Car: {message.carType} {message.carModel}</p>
                    <p>
                      <b>FROM - UNTIL:</b>
                      {message.date.map((date, i) => {
                        return (
                          <span key={i}>{moment(date.toDate()).calendar()}</span>
                        )
                      })}
                    </p>
                  </li>
                )
              }) : null}
            </ul>
          </div>
          <Row>
            {carListt.map((project, i) => {
              return (
                <Col sm={4} key={i}>
                  <div className='mainBoxItem'>
                    <Link to={'/project/' + project.id} >
                      <div className='overflow-hidden'>
                        <img src={project.userImage} alt='Car' />
                      </div>
                      <h3>{project.carType} {project.carModel}</h3>
                    </Link>
                    <span className='car-price'>{project.carPrice} {project.Currency}</span>
                    {/* <em>REVIEW:</em>
                    <span className='feedback'>{project.feedback}</span> */}
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
    projects: state.firestore.ordered.project,
    messages: state.firestore.data.messages
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users' },
    { collection: 'messages' },
    { collection: 'project', orderBy: ['createdAt', 'desc'] }
  ])
)(Profile)