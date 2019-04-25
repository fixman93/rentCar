import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import NavBar from '../navbar/index'
import LastAdded from './lastAdded/lastAdded'
import WhyChooseUs from './whyChooseUs'

import hero_bg from '../../assets/home-hero.jpg'


import './index.scss'
class Home extends Component {

  render() {
    const herobg = {
      backgroundImage: `url(${hero_bg})`
    }
    return (
      <div className='home-page'>
        <NavBar />
        <section className='home-hero' style={herobg}>
          <div className='content'>
            <h1>Find the Best Car</h1>
            <p>From as low as $10 per day with limited time offer discounts</p>
          </div>
        </section>
        <LastAdded />
        <WhyChooseUs />
      </div>
    )
  }
}


export default Home