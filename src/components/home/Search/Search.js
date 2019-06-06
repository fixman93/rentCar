import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import moment from 'moment'

class Search extends Component {
  render() {
    const { projects } = this.props

    let carListt = []
    if (projects) {

      const carList = projects
      carListt = carList.filter((item) => {
        return item.carCity === this.props.match.params.id
      })
    }
    // console.log('PROJECT', projects)
    // console.log('PROPS', this.props.match.params.id)
    return (
      <Container className='search-page'>
        <Row>
          {carListt && carListt.map((project, i) => {
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.project
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'project', orderBy: ['createdAt', 'desc'] }
  ])
)(Search)