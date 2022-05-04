import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import {Form, Button, Card, Container} from 'react-bootstrap'
import Nav from '../Components/Nav/Nav';

import { AuthContext } from '../Context/AuthContext';
import { SIGNUP } from '../utils/APP_API';

function Signup() {

  const AuthCtx = useContext(AuthContext)

  const [err, setErr] = useState(null)
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "name": signupInfo.name,
    "email": signupInfo.email,
    "password": signupInfo.password
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  function handleChange(e) {
    e.preventDefault();

    let value = e.target.value;

    setSignupInfo(signupInfo => {
      return {
        ...signupInfo,
        [e.target.name]: value
      }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    let res = await (await fetch(SIGNUP, requestOptions)).json();
    if (res.status === 'success') {
      AuthCtx.login(res.token);
    } else {
      setErr(err => res.message)
    }
  }

  return (
    <>
      <Nav />

      {/* //Login Box */}
      <Container className='d-flex justify-content-center align-items-center text-left my-4 auth-form-container'>
        <Card style={{ width: '36rem' }}>
          <Card.Header><h1 className='text-center'>Login</h1></Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter Name" name="name" value={signupInfo.name} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={signupInfo.email} onChange={handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={signupInfo.password} onChange={handleChange} />
              </Form.Group>

              <p>Already have an account? <Link to='/signup'>Login</Link></p>
              <Button variant="primary" type="submit">
                Signup
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Signup