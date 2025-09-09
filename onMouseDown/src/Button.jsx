import React from 'react'

const Button = ({ onMouseDown, onMouseUp, isHeld }) => {
    const style = {
        backgroundColor: isHeld ? "red" : "blue",
        color: "white",
        border: "none",
        padding: "10px 20px",
        fontSize: "18px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
    };

    return (
        <div>
            <button style={style} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
                Press & Hold
            </button>

        </div>
    )
}

export default Button