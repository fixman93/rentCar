import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class LastAddedItem extends Component {

  render() {
    const { project } = this.props
    console.log('eeeeee', project)
    return (
      <section className='last-added-item'>
        {project && project.id ?
          <Link to={'/project/' + project.id} >
            <img src={project.userImage} alt='Car' />
          </Link> : null}
        {project && project.carType ? <h3>{project.carType} {project.carModel} <span>{project.carYear}</span></h3> : null}
        <div className='vihicle-price'>
          {project && project.Currency ?
            <div className='currency'>{project.Currency}</div> :
            null}
          {project && project.carPrice ?
            <div className='price'>{project.carPrice}</div> :
            null}
          <span>per day</span>
        </div>
      </section>
    )
  }
}

LastAddedItem.propTypes = {
  project: PropTypes.object.isRequired
};


export default LastAddedItem 