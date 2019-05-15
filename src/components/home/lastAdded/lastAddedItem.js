import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LastAddedItem extends Component {

  render() {
    const { project } = this.props
    return (
      <section className='last-added-item'>
        <Link to={'/project/' + project.id} >
          <img src={project.userImage} alt='Car' />
        </Link>
        <h3>{project.carType} {project.carModel}</h3>
        <p>From {project.carPrice} {project.Currency} per day</p>
      </section>
    )
  }
}


export default LastAddedItem