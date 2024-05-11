import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Astrologer from '../Components/HomePage Components/Astrologer'
import Registration from '../Components/RegistrationPage Components/Registration'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Astrologer/>}/>
            <Route path='/registration' element={<Registration/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes