import React, { useState } from 'react'
import ListModal from '../Components/ListModal/ListModal'
import MainContainer from '../Components/MainContainer/MainContainer'
import Nav from '../Components/Nav/Nav'

function Dashboard() {

  const [showListModal, setShowListModal] = useState(false)

  return (
    <div className='dashboard bg-dark'>
        <Nav setListModalShow={setShowListModal} />
        <ListModal show={showListModal} setShow={setShowListModal} />
        <MainContainer />
    </div>
  )
}

export default Dashboard