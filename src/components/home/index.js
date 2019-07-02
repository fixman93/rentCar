import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import ReactPixel from 'react-facebook-pixel';

import { firestoreConnect } from 'react-redux-firebase'
import Form from 'react-bootstrap/Form'
import Select from 'react-select';
import { compose } from 'redux'
import LastAdded from './lastAdded/lastAdded'
import WhyChooseUs from './whyChooseUs'
import hero_bg from '../../assets/home-hero.jpg'
import search_icon from '../../assets/search_glass@2x.png'
import home_bg from '../../assets/home_bg.png'

import './index.scss'

export class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searcCity: null
    }
  }
  handleChangeSelect = (searcCity) => {
    this.setState({ searcCity });
    console.log('city', this.state.searcCity)
  }

  render() {
    const advancedMatching = { em: 'civcicboris93@gmail.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
    const options = {
      autoConfig: true, 	// set pixel's autoConfig
      debug: false, 		// enable logs
    };
    ReactPixel.init('698040607024049', advancedMatching, options);

    ReactPixel.pageView(); 					// For tracking page view
    // ReactPixel.track( event, data ) 		// For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
    // ReactPixel.trackCustom( event, data ) 	// For tracking custom events
    const { projects } = this.props
    const herobg = {
      backgroundImage: `url(${hero_bg})`
    }
    const homebg = {
      backgroundImage: `url(${home_bg})`
    }
    let searchCities = null
    if (projects) {
      searchCities = projects && projects.map((item) => {
        return {
          value: item.carCity,
          label: item.carCity
        }
      })
      searchCities = [...new Map(searchCities.map(obj => [JSON.stringify(obj), obj])).values()];
    }


    console.log('dsadasda', searchCities)
    return (
      <div className='home-page'>
        <Helmet>
          <title>Homepage || take-vehicle</title>
          <meta name="keywords" content="Car, Renta, Rentacar, Rent a car, find car" />
          <meta
            name="description"
            content="Rent a car to enjoy on your drive"
          />
        </Helmet>
        <section className='home-hero' style={herobg}>
          <div className='content'>
            <h1>Find the Best Car</h1>
            <p>Book unforgettable cars from local hosts around the world</p>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Where</Form.Label>
                <Select
                  className='search-cities'
                  value={this.state.searcCity}
                  onChange={this.handleChangeSelect}
                  options={searchCities ? searchCities : [{ value: 'empty' }]}
                />
                {this.state.searcCity !== null ? <Link to={'/search/' + this.state.searcCity.value} >
                  <img src={search_icon} alt='Search' />
                </Link> : <span className='empty-link'><img src={search_icon} alt='Search' /></span>}
              </Form.Group>
            </Form>
          </div>
        </section>
        <LastAdded projects={projects} homebg={homebg} />
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