import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import OnBoardingPage from "../pages/OnBoardingPage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx"; // misalnya
import { PrivateRoute, PublicRoute } from "./GemaRoute.jsx";

function GemaApp() {
    return (
        <div className="gema-app">
            <Routes>
                <Route path="/"
                        element={
                            <PublicRoute>
                                <OnBoardingPage />
                            </PublicRoute>
                        }
                />
                <Route path="/login"
                        element={
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute>
                        }
                />
                <Route path="/register"
                        element={
                            <PublicRoute>
                                <RegisterPage />
                            </PublicRoute>
                        }
                />
                <Route path="/dashboard"
                        element={
                            <PrivateRoute>
                                <DashboardPage />
                            </PrivateRoute>
                        }
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default GemaApp;
