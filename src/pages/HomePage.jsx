import { useState, useEffect } from "react";
import NotesList from "../component/NotesList.jsx";
import { getNotes, deleteNote, archiveNote, unArchiveNote, filterNotes } from "../utils/data.js";
import NotesHeader from "../component/NotesHeader.jsx";
import NotesFilter from "../component/NotesFilter.jsx";
import NotesSidebar from "../component/NotesSidebar.jsx";
import { useSearchParams } from "react-router-dom";

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const defaultKeyword = searchParams.get("keyword") || "";
    const defaultFilter = searchParams.get("filter") || "all";

    const [searchQuery, setSearchQuery] = useState(defaultKeyword);
    const [filterActive, setFilterActive] = useState(defaultFilter);
    const [searchActive, setSearchActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [notes, setNotes] = useState(getNotes());

    useEffect(() => {
        setSearchParams({ keyword: searchQuery, filter: filterActive });
    }, [searchQuery, filterActive, setSearchParams]);

    const handleDelete = (noteId) => {
        deleteNote(noteId);
        setNotes(getNotes());
    };

    const handleArchive = (noteId, archived) => {
        if (archived) {
            unArchiveNote(noteId);
        } else {
            archiveNote(noteId);
        }
        setNotes(getNotes());
    };

    const toggleSidebar = () => {
        setSidebarActive((prev) => !prev);
    };

    const filteredNotes = filterNotes(notes, filterActive).filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="home-page">
            <NotesSidebar sidebarActive={sidebarActive} toggleSidebar={toggleSidebar} />
            <div className="note-layout">
                <NotesHeader
                    searchActive={searchActive}
                    setSearchActive={setSearchActive}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    toggleSidebar={toggleSidebar}
                />
                <NotesFilter filterActive={filterActive} setFilterActive={setFilterActive} />
                <div className="note-body">
                    <NotesList notes={filteredNotes} onDelete={handleDelete} onArchive={handleArchive} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
