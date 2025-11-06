import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { ROUTES } from '../constants/routes'
import AboutPage from '../pages/AboutPage'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route index path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        </Routes>
    )
}

export default PublicRoutes