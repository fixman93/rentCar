import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import NavBar from '../navbar/index'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const { projects } = this.props
    return (
      <div>
        <NavBar />
        {projects && projects.map((project, i) => {
          return (
            <div key={i}>
              <h3>{project.carName}</h3>
              <span>{project.authorFirstName}</span>
            </div>
          )
        })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('this state', state)
  return {
    projects: state.firestore.ordered.project
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'project' }
  ])
)(Dashboard)