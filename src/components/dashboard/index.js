import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const { projects } = this.props
    return (
      <div>
        sdsa
        {projects && projects.map((project, i) => {
          return (
            <div key={i}>{project.title}</div>
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