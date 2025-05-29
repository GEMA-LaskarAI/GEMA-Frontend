import {Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import OnBoardingPage from "../pages/OnBoardingPage.jsx";

function GemaApp() {
    return (
        <div className="gema-app">
            <Routes>
                <Route path="/" element={<OnBoardingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default GemaApp;
