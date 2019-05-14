import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CarModal from './carModal'
import bg_cars from '../../assets/bg-cars.jpg'

import './index.scss'
class ProjectDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const { project, users } = this.props
    const sectionStyle = {
      backgroundImage: `url(${bg_cars})`
    };


    console.log('MESSAGES', this.props.messages)
    let newUser = []
    if (users && project) {

      const carList = users
      newUser = Object.values(carList).filter((item) => {
        console.log('item', item.id)
        console.log('item', project.authhorId)
        return item.id === project.authhorId
      })

    }
    let projectID = ''
    if (this.props.history) {

      console.log('GLAVNI', this.props.match.params.id)
      projectID = this.props.match.params.id
    }


    if (project) {
      return (
        <div>
          <section className='hero'>
            <div className='container'>
              <h1>{project.carType}</h1>
              <ul className='hero-links'>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/dashboard'>Cars</Link></li>
              </ul>
            </div>
            <div className='box-position' style={sectionStyle}></div>
          </section>
          <Container>
            <Row className='car-detail-page'>
              <Col lg="6">
                <img src={project.userImage} alt='Car' />
              </Col>
              <Col lg="6" className='car-detail-list'>
                <h4>{project.carType} {project.carModel}</h4>
                <p> {newUser && newUser[0] && newUser[0].phoneNumber ? 'Tel: ' + newUser[0].phoneNumber : null}</p>
                <p>{project && project.carPrice ? 'Price:' + project.carPrice + ' ' + project.Currency : null}</p>
                <p>{project && project.carCountry ? 'Country:' + project.carCountry : null}</p>
                <p>{project && project.carCountry ? ' City: ' + project.carCity : null}</p>
                <p>{project.carDescription}</p>
                <div className='divider divider-30'></div>
                <ul>
                  {project.carStatistick && project.carStatistick.map((items, i) => {
                    return (
                      <li key={i}><FontAwesomeIcon icon="check" /> {items}</li>
                    )
                  })}
                </ul>
                <div className='divider divider-30'></div>
                <CarModal
                  userID={newUser && newUser[0] && newUser[0].id ? newUser[0].id : 0}
                  projectID={projectID}
                  carType={project.carType}
                  carModel={project.carModel}
                />
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
    else {
      return (
        <div>Loading project...</div>
      )
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  console.log('USER:', state)
  const id = ownProps.match.params.id
  const projects = state.firestore.data.project
  const project = projects ? projects[id] : null
  return {
    project: project,
    users: state.firestore.data.users,
    messages: state.firestore.data.messages
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // { collection: 'project', orderBy: ['createdAt', 'desc'], limit: 3 }
    { collection: 'users' },
    { collection: 'project' },
    { collection: 'messages' }
  ])
)(ProjectDetail)