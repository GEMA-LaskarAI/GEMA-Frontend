import {showFormattedDate} from "../utils/data.js";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function NotesItemBody({id, title, body, createdAt}) {
    return (
        <div className="notes-item-body">
            <h3 className="notes-item-body__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <span className="notes-item-body__createAt">{showFormattedDate(createdAt)}</span>
            <p className="notes-item-body__body">{body}</p>
        </div>
    );
}

NotesItemBody.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NotesItemBody;
