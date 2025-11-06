import React from 'react'
import PublicRoutes from './PublicRoutes'
import ProtectedRoutes from './ProtectedRoutes'

const AppRoutes = () => {
  return (
    <>
    <PublicRoutes/>
    <ProtectedRoutes/>
    </>
  )
}

export default AppRoutes