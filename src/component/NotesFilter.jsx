import {FiList, FiCloud, FiCloudOff} from "react-icons/fi";
import PropTypes from "prop-types";

function NotesFilter({filterActive, setFilterActive}) {
    return (
        <div className="note-filter">
            <button className={`note-filter__button ${filterActive === "all" ? "active" : ""}`}
                    onClick={() => setFilterActive("all")}>
                <FiList className="icon"/> <span>All Notes</span>
            </button>
            <button className={`note-filter__button ${filterActive === "archived" ? "active" : ""}`}
                    onClick={() => setFilterActive("archived")}>
                <FiCloud className="icon"/> <span>Archived</span>
            </button>
            <button className={`note-filter__button ${filterActive === "unarchived" ? "active" : ""}`}
                    onClick={() => setFilterActive("unarchived")}>
                <FiCloudOff className="icon"/> <span>Unarchived</span>
            </button>
        </div>
    );
}

NotesFilter.propTypes = {
    filterActive: PropTypes.string.isRequired,
    setFilterActive: PropTypes.func.isRequired,
};

export default NotesFilter;
