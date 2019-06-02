import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

import { sendMessageToClient } from '../../store/actions/projectAction'



export class CarModal extends Component {


  componentWillReceiveProps(newProps) {
    this.setState({
      userID: newProps.userID,
      projectID: newProps.projectID,
      carType: newProps.carType,
      carModel: newProps.carModel
    })
  }
  constructor(props, context) {
    super(props, context);

    this.state = {
      lgShow: false,
      reserved: true,
      phoneNumber: '',
      yourEmail: '',
      date: [new Date(), new Date()],
      userID: '',
      projectID: '',
      carType: '',
      carModel: '',
      errorButton: true,
      submitted: false
    };
  }

  handleChange = (e) => {
    const { phoneNumber, yourEmail } = this.state
    this.setState({
      [e.target.name]: e.target.value
    })
    if (phoneNumber.length < 6 || yourEmail.length < 10) {
      this.setState({
        errorButton: true
      })
    }
    else {
      this.setState({
        errorButton: false
      })
    }
  }

  handleSubmit = (e) => {
    const { phoneNumber, yourEmail } = this.state
    e.preventDefault()
    if (phoneNumber === '' && yourEmail === '') {
      this.setState({
        errorButton: true
      })
    }
    else {
      this.props.sendMessageToClient(this.state)
      this.setState({
        lgShow: false,
        submitted: true
      })
    }
    this.props.reserved(this.state.reserved)
  }

  onChange = date => this.setState({ date })
  render() {
    let lgClose = () => this.setState({ lgShow: false });
    return (
      (
        <div>
          <ButtonToolbar>

            <Button onClick={() => this.setState({ lgShow: true })}>
              Rent This Car
          </Button>
            <Modal
              size="lg"
              show={this.state.lgShow}
              onHide={lgClose}
              aria-labelledby="example-modal-sizes-title-lg"
              className='send-message-to-owner'
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Contact info
              </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className='submit-click' onSubmit={this.handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Your Phone Number</Form.Label>
                        <Form.Control type="text" name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} placeholder='Phone Number' />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" name='yourEmail' value={this.state.yourEmail} onChange={this.handleChange} placeholder='Enter email' />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <DateTimeRangePicker
                        className='dateTimeRangePicker'
                        onChange={this.onChange}
                        value={this.state.date}
                      />
                    </Col>
                  </Row>
                  <Button disabled={this.state.errorButton ? true : false} type='submit' variant="primary">Submit</Button>
                </Form>
              </Modal.Body>
            </Modal>
          </ButtonToolbar>
        </div>
      )
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessageToClient: (message) => dispatch(sendMessageToClient(message))
  }
}

export default connect(null, mapDispatchToProps)(CarModal)