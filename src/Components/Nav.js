import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { AuthContext } from '../Context/AuthContext'

function Nav() {

  const AuthCtx = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href='/'>
          <h1>OMDB APP</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Nav