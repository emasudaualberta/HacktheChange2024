import React from "react";

const GachaButton = ({ onClick, children }) => {
    return (
        <button type = "button" onClick={onClick}>
            {children}
        </button>
    );
};

export default GachaButton;