import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import NavBar from '../navbar/index'

class ProjectDetail extends Component {

  render() {
    const { project } = this.props
    console.log('carname', project)
    if (!this.props.auth.uid) {
      return <Redirect to='/' />
    }
    if (project) {
      return (
        <div>
          <NavBar />
          <h2>{project.carName}</h2>
          <p>{project.carDescription}</p>
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
    auth: state.firebase.auth,
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