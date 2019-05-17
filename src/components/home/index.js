import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { firestoreConnect } from 'react-redux-firebase'
import Form from 'react-bootstrap/Form'
import Select from 'react-select';
import { compose } from 'redux'
import LastAdded from './lastAdded/lastAdded'
import WhyChooseUs from './whyChooseUs'
import hero_bg from '../../assets/home-hero.jpg'
import search_icon from '../../assets/search_glass@2x.png'

import './index.scss'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searcCity: null
    }
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleChangeSelect = (searcCity) => {
    this.setState({ searcCity });
  }

  render() {
    const { projects } = this.props
    const herobg = {
      backgroundImage: `url(${hero_bg})`
    }
    let searchCities = null

    if (projects) {
      searchCities = projects && projects.map((item) => {
        return {
          value: item.carCity,
          label: item.carCity
        }
      })
    }
    console.log('dsadasda', searchCities)
    return (
      <div className='home-page'>
        <section className='home-hero' style={herobg}>
          <div className='content'>
            <h1>Find the Best Car</h1>
            <p>Book unforgettable cars from local hosts around the world</p>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Where</Form.Label>
                <Select
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