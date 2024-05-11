import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Astrologer from '../Components/HomePage Components/Astrologer'
// import Registration from '../Components/RegistrationPage Components/Registration'
import RegistrationPage from '../Pages/Registration Page/RegistrationPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Astrologer/>}/>
            <Route path='/registration' element={<RegistrationPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes