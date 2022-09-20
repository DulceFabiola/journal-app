import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AuthRoutes = () => {
    return (
        <Routes>

            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />

            {/* Culaquier ruta */}
            <Route path='/*' element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
