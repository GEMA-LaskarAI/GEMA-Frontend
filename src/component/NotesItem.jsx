import PropTypes from "prop-types";
import NotesItemBody from "./NotesItemBody.jsx";
import NotesItemButton from "./NotesItemButton.jsx";

function NotesItem({id, title, body, createdAt, onDelete, onArchive, archived}) {
    return (
        <div className="notes-item">
            <span className="notes-item__stick"></span>
            <NotesItemBody id={id} title={title} body={body} createdAt={createdAt}/>
            <NotesItemButton id={id} onDelete={onDelete} onArchive={onArchive} archived={archived}/>
        </div>
    );
}

NotesItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
};

export default NotesItem;
