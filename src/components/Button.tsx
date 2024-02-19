import React from 'react';
import "../styles/components/button.css"

interface ButtonProps {
    type: 'primary' | 'secondary';
    width?: number;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
    // Determine the button's className based on the `type` prop
    const className = "button " + (type === 'primary' ? 'button-primary' : 'button-secondary');

    return (
        <button className={className} >
            {children}
        </button>
    );
};

export default Button;
