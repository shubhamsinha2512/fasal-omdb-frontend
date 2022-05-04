import React, { useState, useContext } from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'
import './Auth.css'

import { BASE_URL, LOGIN } from '../utils/APP_API';

//Auth
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';

function Login() {

  const AuthCtx = useContext(AuthContext)

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  const [err, setErr] = useState(null)

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "email": loginInfo.email,
    "password": loginInfo.password
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

    setLoginInfo(loginInfo => {
      return {
        ...loginInfo,
        [e.target.name]: value
      }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    let res = await (await fetch(LOGIN, requestOptions)).json();

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
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={loginInfo.email} onChange={handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={loginInfo.password} onChange={handleChange} />
              </Form.Group>

              <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Login