function Button({ children, type = "button", onClick, disabled = false, variant = "primary" }) {
    return (
        <button
            className={`ui-button ui-button--${variant}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
