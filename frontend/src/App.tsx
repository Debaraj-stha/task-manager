
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import AppRoutes from './Routes/AppRoutes'

function App() {
  console.log(window.location)

  return (
    <>
      <Header />
      <div className="min-h-screen bg-linear-to-r from-gray-900  to-gray-950">
        <AppRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App
