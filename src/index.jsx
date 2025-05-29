import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NotesApp from "./component/NotesApp.jsx";

import './styles/style.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <NotesApp />
    </BrowserRouter>
);
