import React, {Fragment} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


import SignUp from './container/Auth/SignUp'
import SignIn from './container/Auth/SignIn'


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<h3>Home</h3>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/not-found" element={<h3>Not Found</h3>} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Fragment>
  )// comment
}

export default App
