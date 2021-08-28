import React from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'

export const Forms = () => {
    return (
        <Container>
          <Row className='justify-content-center'>
            <Col className='col-5'>
              <Form>
                <Form.Group className='mb-3' controlId='formBasic'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' placeholder='Enter your name' />
                  <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
    )
}
