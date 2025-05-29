function Button({ children, type = "button", onClick }) {
    return (
        <button className="ui-button" type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
