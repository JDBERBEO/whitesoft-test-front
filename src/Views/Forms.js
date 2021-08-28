import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import axios from 'axios'

export const Forms = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    country: '',
  })
  const [state, setState] = useState({
    loading : false,
    error: ''
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target 
    setUserInfo({...userInfo,
      [name] : value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
    try {
      setState({ loading: true})
      const { data } = await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_BASE_URL,
        url: 'user/signup',
        data:  userInfo 
      })
      setState({ loading: false})
    } catch (error) {
      setState({
        error: error.response.data.message,
        loading: false 
      })
      console.log()
    }
  }

    return (
        <Container>
          <Row className='justify-content-center'>
            <Col className='col-5'>
              <Form
              onSubmit={handleSubmit}
              >
                <Form.Group className='mb-3' controlId='formBasic'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                  type='text' 
                  placeholder='Enter your name' 
                  name='name'
                  onChange={handleChange}
                  value={userInfo.name}
                  />
                  
                    {!! state.error && <Form.Text className='text-muted'>{state.error}</Form.Text>}
                  
                </Form.Group>
                <Button 
                variant='primary' 
                type='submit'
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
    )
}
