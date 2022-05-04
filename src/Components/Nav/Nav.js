import React, { useContext } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { AuthContext } from '../../Context/AuthContext'
import {Link} from 'react-router-dom'

import './Nav.css'

function Nav({ setListModalShow }) {

  const AuthCtx = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" className="nav_bar">
      <Container className='d-flex justify-space-between'>
        <Navbar.Brand href='/'>
          <h1>OMDB APP</h1>
        </Navbar.Brand>
        {AuthCtx.isLoggedIn ?
          <div>
            <h4>{AuthCtx.user && AuthCtx.user.name}</h4>

            <Container className='my-2'>
              <Button
                className='mx-2'
                onClick={() => setListModalShow(true)}
              >
                Create New List
              </Button>

              <Button
                className='mx-2'
                variant='danger'
                onClick={AuthCtx.logout}
              >Logout</Button>
            </Container>

          </div>
          :
          <div>
            <Link to='/login'>
              <Button
                className='mx-2'
                variant='primary'
              >Login
              </Button>
          </Link>

          <Link to='/signup'>
              <Button
                className='mx-2'
                variant='primary'
              >Signup
              </Button>
          </Link>
          </div>
        }
    </Container>
    </Navbar >
  )
}

export default Nav