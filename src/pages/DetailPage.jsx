import {useNavigate, useParams} from "react-router-dom";
import {archiveNote, deleteNote, getNotes, unArchiveNote} from "../utils/data.js";
import {Component} from "react";
import NotesList from "../component/NotesList.jsx";
import PropTypes from "prop-types";
import NotesSidebar from "../component/NotesSidebar.jsx";
import NotesHeader from "../component/NotesHeader.jsx";

function DetailPageWrapper() {
    const {id} = useParams();
    const navigate = useNavigate();

    return <DetailPage noteId={id} navigate={navigate}/>;
}

class DetailPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNotes().find((note) => note.id === props.noteId) || null,
            sidebarActive: false,
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    toggleSidebar = () => {
        this.setState((prevState) => ({sidebarActive: !prevState.sidebarActive}));
    };

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState({note: null}, () => {
            this.props.navigate("/");
        });
    }

    onArchiveHandler(id) {
        if (!this.state.note) return;

        if (this.state.note.archived) {
            unArchiveNote(id);
        } else {
            archiveNote(id);
        }

        this.setState({
            note: getNotes().find((note) => note.id === id) || null,
        });
    }

    render() {
        const {sidebarActive} = this.state;

        if (!this.state.note) {
            return <p className="notes-detail-empty">Note not found!</p>;
        }

        return (
            <div className="detail-page">
                <NotesSidebar sidebarActive={sidebarActive} toggleSidebar={this.toggleSidebar}/>
                <div className="note-layout">
                    <NotesHeader
                        searchActive={false}
                        toggleSidebar={this.toggleSidebar}
                    />
                    <NotesList
                        notes={[this.state.note]}
                        onDelete={this.onDeleteHandler}
                        onArchive={this.onArchiveHandler}
                    />
                </div>
            </div>
        );
    }
}

DetailPage.propTypes = {
    noteId: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
