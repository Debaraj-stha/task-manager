
import './App.css'

import PublicRoutes from './Routes/PublicRoutes'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
console.log(window.location)

  return (
    <>
    <Header/>
     <div className="min-h-screen bg-linear-to-r from-gray-900  to-gray-950">
      <PublicRoutes />
      </div>
      <Footer/>
    </>
  )
}

export default App
