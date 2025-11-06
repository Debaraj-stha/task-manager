import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import PublicRoutes from './Routes/PublicRoutes'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {


  return (
    <>
    <Header/>
     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-gray-100">
      <PublicRoutes />
      </div>
      <Footer/>
    </>
  )
}

export default App
