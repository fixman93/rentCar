import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import NavBar from '../navbar/index'
import moment from 'moment'
import bg_cars from '../../assets/bg-cars.jpg'

class Dashboard extends Component {
  render() {
    const sectionStyle = {
      backgroundImage: `url(${bg_cars})`
    };
    const { projects } = this.props
    return (
      <div>
        <NavBar />
        <section className='hero'>
          <div className='container'>
            <h1>Classic Car Page</h1>
            <ul className='hero-links'>
              <li><Link to='/'>Home</Link> </li>
              <li><Link to='/dashboard'>Cars</Link></li>
            </ul>
          </div>
          <div className='box-position' style={sectionStyle}></div>
        </section>
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