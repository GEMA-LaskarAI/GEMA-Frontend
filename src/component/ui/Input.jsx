import { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

function Input({ label, type = "text", value, onChange, placeholder }) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    const togglePassword = () => setShowPassword((prev) => !prev);

    return (
        <div className="ui-input-group">
            {label && <label className="ui-input-label">{label}</label>}

            <div className="ui-input-wrapper">
                <input
                    type={inputType}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`ui-input ${isPassword ? "with-icon" : ""}`}
                    required
                />
                {isPassword && (
                    <span className="ui-input-icon" onClick={togglePassword}>
                        {showPassword ? <IconEyeOff stroke={2} size={20} /> : <IconEye stroke={2} size={20} />}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Input;
