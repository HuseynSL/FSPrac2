import React from 'react'
import Services from '../../components/Services'
import BacgroundServ from '../../components/bacgroundServ'
import Members from '../../components/members'
import Slider from '../../components/slider'

function Home() {
  return (
    <div className='bg-slate-100'>
      <Slider/>
      <Services/>
      <BacgroundServ/>
      <Members  />
    </div>
  )
}

export default Home
