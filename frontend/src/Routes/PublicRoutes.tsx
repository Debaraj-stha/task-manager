
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { ROUTES } from '../constants/routes'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route index path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        </Routes>
    )
}

export default PublicRoutes