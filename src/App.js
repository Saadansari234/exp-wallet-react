import React from 'react'
import { useSelector } from 'react-redux'
import SignIn from './pages/Signin'
import Main from './pages/Main'

const App = () => {
    const loginData = useSelector((state) => state.LOGIN_INFO)
    return (
        loginData ? (<Main />) : (<SignIn />)
    )
}

export default App
