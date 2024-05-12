import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Astrologer from '../Components/HomePage Components/Astrologer'
// import Registration from '../Components/RegistrationPage Components/Registration'
import RegistrationPage from '../Pages/Registration Page/RegistrationPage'
import UpdateAstrologer from '../Components/Update Astrologer/UpdateAstrologer'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Astrologer/>}/>
            <Route path='/registration' element={<RegistrationPage/>}/>
            <Route path='/updateAstrologer/:id' element={<UpdateAstrologer/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes