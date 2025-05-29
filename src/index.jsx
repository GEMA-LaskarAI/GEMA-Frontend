import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GemaApp from "./component/GemaApp.jsx";

import './styles/style.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <GemaApp />
    </BrowserRouter>
);
