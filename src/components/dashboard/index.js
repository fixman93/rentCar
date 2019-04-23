import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import NavBar from '../navbar/index'
import moment from 'moment'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const { projects } = this.props
    return (
      <div>
        <NavBar />
        {projects && projects.map((project, i) => {
          return (
            <Link to={'/project/' + project.id} key={i}>
              <h3>{project.carName}</h3>
              <span>{project.authorFirstName}</span>
              <em>{moment(project.createdAt.toDate()).calendar()}</em>
            </Link>
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
    // { collection: 'project', orderBy: ['createdAt', 'desc'], limit: 3 }
    { collection: 'project', orderBy: ['createdAt', 'desc'] }
  ])
)(Dashboard)