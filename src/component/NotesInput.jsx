import React from "react";
import PropTypes from "prop-types";

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState({ title: event.target.value });
    }

    onBodyChangeEventHandler(event) {
        this.setState({ body: event.target.value });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({ title: "", body: "" }); // Clear input fields after submission
    }

    render() {
        const { title, body } = this.state;
        const isDisabled = title.trim() === "" || body.trim() === ""; // Check if inputs are empty

        return (
            <div className="note-input">
                <h2 className="note-input__title">Create a New Note</h2>
                <form className="note-input__form" onSubmit={this.onSubmitEventHandler}>
                    <label htmlFor="form-title">Note Title</label>
                    <input
                        id="form-title"
                        type="text"
                        placeholder="Enter a catchy title..."
                        value={title}
                        onChange={this.onTitleChangeEventHandler}
                    />
                    <label htmlFor="form-body">Note Content</label>
                    <textarea
                        id="form-body"
                        placeholder="Write down your thoughts here..."
                        value={body}
                        onChange={this.onBodyChangeEventHandler}
                    />
                    <button type="submit" disabled={isDisabled}>Create</button>
                </form>
            </div>
        );
    }
}

NotesInput.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default NotesInput;
