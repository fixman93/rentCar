import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { updateProject } from '../../store/actions/projectAction'

import { compose } from 'redux'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import moment from 'moment'
import bg_cars from '../../assets/bg-cars.jpg'

import './index.scss'
export class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      feedback: 0,
      carID: '0'
    }
    this.addFeedback = this.addFeedback.bind(this)
  }

  addFeedback = (id, feedback) => {
    console.log('id:', id + 'aaaaaa' + feedback)
    // this.setState({
    //   feedback: feedback + 1,
    //   carID: id
    // }).then(() => {
    //   console.log('eeeee', this.state)
    // }).catch((err) => {
    //   console.log(err)
    // })

    this.setState({
      carID: id,
      feedback: feedback + 1
    }, () => {
      console.log(this.state)
      this.props.updateProject(this.state)
    })
  }
  render() {
    const sectionStyle = {
      backgroundImage: `url(${bg_cars})`
    };
    const { projects } = this.props
    return (
      <div>
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
        <Container>
          <Row>
            {projects && projects.map((project, i) => {
              return (

                <Col sm={4} key={i}>
                  <div className='mainBoxItem'>
                    <Link to={'/project/' + project.id} >
                      <div className='overflow-hidden'>
                        <img src={project.userImage} alt='Car' />
                      </div>
                      <h3>{project.carType} {project.carModel}</h3>
                    </Link>
                    <div className='flex'>
                      <p>{project.authorFirstName}</p>
                      <em>{moment(project.createdAt.toDate()).calendar()}</em>
                    </div>
                    <span className='car-price'>{project.carPrice} {project.Currency} / <em>Per Day</em></span>
                    <span className='review-number' onClick={() => this.addFeedback(project.id, project.feedback)}>+1 ({project.feedback})</span>
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
    projects: state.firestore.ordered.project
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProject: (project) => dispatch(updateProject(project))
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'project', orderBy: ['createdAt', 'desc'] }
  ])
)(Dashboard)