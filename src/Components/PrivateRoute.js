import React from 'react'
import { Outlet, Navigate } from "react-router-dom"
import AuthService from '../Common/Services/AuthService'

export default function PrivateRoute() {
    return AuthService.currentUser ? <Outlet /> : <Navigate to="/login" />
}
