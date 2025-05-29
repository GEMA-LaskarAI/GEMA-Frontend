import  { useState } from "react";
import NotesSidebar from "../component/NotesSidebar.jsx";
import NotesHeader from "../component/NotesHeader.jsx";
import {addNote} from "../utils/data.js";
import {useNavigate} from "react-router-dom";
import NotesInput from "../component/NotesInput.jsx";

function CreatePage() {
    const [sidebarActive, setSidebarActive] = useState(false);
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNote(note);
        navigate("/");
    }

    return (
        <div className="create-page">
            <NotesSidebar sidebarActive={sidebarActive} toggleSidebar={() => setSidebarActive(!sidebarActive)} />
            <div className="note-layout">
                <NotesHeader
                    searchActive={false}
                    toggleSidebar={() => setSidebarActive(!sidebarActive)}
                />
                <NotesInput addNote={onAddNoteHandler}/>
            </div>
        </div>
    );
}

export default CreatePage;
