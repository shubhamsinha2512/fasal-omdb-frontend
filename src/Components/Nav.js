import React, { useContext } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { AuthContext } from '../Context/AuthContext'

function Nav() {

  const AuthCtx = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container className='d-flex justify-space-between'>
        <Navbar.Brand href='/'>
          <h1>OMDB APP</h1>
        </Navbar.Brand>
        {AuthCtx.isLoggedIn && 
          <div>
            <h4>{AuthCtx.user && AuthCtx.user.name}</h4>
            <Button
              variant='danger'
              onClick={AuthCtx.logout}
            >Logout</Button>
          </div>
          }
      </Container>
    </Navbar>
  )
}

export default Nav