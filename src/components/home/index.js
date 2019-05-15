import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import LastAdded from './lastAdded/lastAdded'
import WhyChooseUs from './whyChooseUs'

import hero_bg from '../../assets/home-hero.jpg'


import './index.scss'
class Home extends Component {

  render() {
    const { projects } = this.props
    const herobg = {
      backgroundImage: `url(${hero_bg})`
    }
    console.log('dsadasda', projects)
    return (
      <div className='home-page'>
        <section className='home-hero' style={herobg}>
          <div className='content'>
            <h1>Find the Best Car</h1>
            <p>From as low as $10 per day with limited time offer discounts</p>
          </div>
        </section>
        <LastAdded projects={projects} />
        <WhyChooseUs />
      </div>
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
    { collection: 'project', orderBy: ['createdAt', 'desc'], limit: 6 }
  ])
)(Home)