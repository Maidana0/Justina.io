import React from 'react'
import Login from '../components/organisms/Login'
import Register from '../components/organisms/Register'
import useAuthStore from '../store/auth-store'
import { shallow } from 'zustand/shallow'
import { Redirect } from 'wouter'
import ForgotPassword from '../components/molecules/ForgotPassword'

const Auth = ({ page }) => {
  const isLogged = useAuthStore((state => state.isLogged), shallow)

  if ((page === "iniciar-sesion" || page === "login") && !isLogged) {
    return <Login />
  }
  if ((page === "registrarme" || page === "register") && !isLogged) {
    return <Register />
  }
  if ((page === "forgot-password") && !isLogged) {
    return <ForgotPassword />
  }

  if (isLogged) return <Redirect to="/" />

  else return <div>
    <h1>Página equivocada.</h1>
  </div>

}

export default Auth