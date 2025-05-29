import NotesItem from "./NotesItem.jsx";
import PropTypes from "prop-types";

function NotesList({notes, onDelete, onArchive}) {
    return (
        <div className="notes-list">
            {
                notes.length > 0 ? (
                    notes.map((note) => (
                        <NotesItem
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            archived={note.archived}
                            {...note} />
                    ))
                ) : (
                    <p className="notes-list__empty">No active notes found.</p>
                )
            }
        </div>
    );
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
};

export default NotesList;
