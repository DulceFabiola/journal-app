import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
    return (
        <Routes>

            {/* Login y Registro 
            cualquier ruta que empiece con auth
            */
            }
            <Route path="/auth/*" element={<AuthRoutes />}

            />
            {/* JournalApp 
            cualquier ruta que no entre por auth
            */}
            <Route path="/*" element={<JournalRoutes />}

            />
        </Routes>
    )
}
