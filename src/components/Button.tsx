import React from 'react';
import "../styles/components/button.css"

interface ButtonProps {
    type: 'primary' | 'secondary';
    disabled?: boolean;
    width?: number;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, disabled, children }) => {
    // Determine the button's className based on the `type` prop
    let className = "button " + (type === 'primary' ? 'button-primary' : 'button-secondary');

    className += (disabled ? " button-disabled" : "");

    return (
        <button className={className} >
            {children}
        </button>
    );
};

export default Button;
