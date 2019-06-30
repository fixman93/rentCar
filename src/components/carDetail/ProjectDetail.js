import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Button from 'react-bootstrap/Button'

// import CarModal from './CarModal'
import bg_cars from '../../assets/bg-cars.jpg'

import './index.scss'
export class ProjectDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      orderFinished: false
    }
    this.orderFinished = this.orderFinished.bind(this)
  }

  orderFinished(order) {
    if (order) {
      this.setState({
        orderFinished: true
      })
    }
  }
  render() {
    const { project, users } = this.props
    const sectionStyle = {
      backgroundImage: `url(${bg_cars})`
    };


    let newUser = []
    if (users && project) {

      const carList = users
      newUser = Object.values(carList).filter((item) => {
        return item.id === project.authhorId
      })

    }
    // let projectID = ''
    // if (this.props.history) {
    //   letprojectID = this.props.match.params.id
    // }



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
            {this.state.orderFinished ? <div className='congratulation'><FontAwesomeIcon icon="check" /> <b>Congratulation!</b> Seller will contact you soon.</div> : null}
            <Row className='car-detail-page'>
              <Col lg="6">
                <img src={project.userImage} alt='Car' />
              </Col>
              <Col lg="6" className='car-detail-list'>
                <h4>{project.carType} {project.carModel}</h4>
                <p> {newUser && newUser[0] && newUser[0].phoneNumber ? <span><b>Tel:</b>   {newUser[0].phoneNumber}</span> : null}</p>
                <p>{project && project.carPrice ? <span><b>Price:</b> {project.carPrice + ' ' + project.Currency}</span> : null}</p>
                <p>{project && project.carCountry ? <span><b>Country:</b>  {project.carCountry}</span> : null}</p>
                <p>{project && project.carCountry ? <span><b>City:</b>  {project.carCity}</span> : null}</p>
                <p>{project && project.transmision ? <span><b>Transmision:</b> {project.transmision}</span> : null}</p>
                <p>{newUser && newUser[0] && newUser[0].userAddress ? <span><b>Address:</b>  {newUser[0].userAddress}</span> : null}</p>

                <div className='divider divider-30'></div>
                <ul>
                  {project.carStatistick && project.carStatistick.map((items, i) => {
                    return (
                      <li key={i}><FontAwesomeIcon icon="check" /> {items.value}</li>
                    )
                  })}
                </ul>
                <div className='divider divider-30'></div>
                <div className='car-description'>
                  <p>{project.carDescription}</p>
                </div>
                {
                  /* {this.props.auth && project && this.props.auth.uid === project.authhorId ? <Button disabled={true}>Rent This Car</Button> : <CarModal
                  userID={newUser && newUser[0] && newUser[0].id ? newUser[0].id : 0}
                  projectID={projectID}
                  carType={project.carType}
                  carModel={project.carModel}
                  reserved={this.orderFinished}
                />} */
                }

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
  const id = ownProps.match.params.id
  const projects = state.firestore.data.project
  const project = projects ? projects[id] : null
  return {
    auth: state.firebase.auth,
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