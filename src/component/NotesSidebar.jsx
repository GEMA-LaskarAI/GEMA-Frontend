import {FiMeh, FiX, FiHome, FiEdit} from "react-icons/fi";
import {Link, useLocation} from "react-router-dom";
import PropTypes from "prop-types";

function NotesSidebar({sidebarActive, toggleSidebar}) {
    const location = useLocation();

    return (
        <div className={`note-sidebar ${sidebarActive ? 'active' : ''}`}>
            <div className="note-sidebar__header">
                <h1>Personal Notes</h1>
                <FiMeh className="icon-meh"/>
                <button onClick={toggleSidebar}>
                    <FiX className="icon"/>
                </button>
            </div>
            <nav className="note-sidebar-nav">
                <Link to="/" className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}>
                    <span>
                        <FiHome className="icon"/> <span className="icon-name">Modern</span>
                    </span>
                </Link>
                <Link to="/create" className={`sidebar-link ${location.pathname === '/create' ? 'active' : ''}`}>
                    <span>
                        <FiEdit className="icon"/> <span className="icon-name">Create</span>
                    </span>
                </Link>
            </nav>
        </div>
    );
}

NotesSidebar.propTypes = {
    sidebarActive: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default NotesSidebar;
