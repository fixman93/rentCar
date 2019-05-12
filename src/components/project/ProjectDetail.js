import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from '../navbar/index'

import './index.scss'
class ProjectDetail extends Component {

  render() {
    const { project } = this.props
    if (project) {
      return (
        <div>
          <NavBar />
          <Container>
            <Row>
              <Col>
                <img src={project.userImage} alt='Car' />
              </Col>
              <Col>
                <h4>{project.carType} {project.carModel}</h4>
                <p>{project.carDescription}</p>
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
  console.log('uuuu', state)
  const id = ownProps.match.params.id
  const projects = state.firestore.data.project
  const project = projects ? projects[id] : null
  // console.log('state', state)
  return {
    project: project
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // { collection: 'project', orderBy: ['createdAt', 'desc'], limit: 3 }
    { collection: 'project' }
  ])
)(ProjectDetail)