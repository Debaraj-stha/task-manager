
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { ROUTES } from '../constants/routes'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'

import LoginPage from '../features/auth/pages/LoginPage'
import AuthWrapper from '../features/auth/components/AuthWrapper'
import Signup from '../features/auth/pages/Signup'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route index path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />

            <Route path='/auth' element={<AuthWrapper />}>
                <Route index path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route index path={ROUTES.SIGNUP} element={<Signup />} />
            </Route>
        </Routes>
    )
}

export default PublicRoutes