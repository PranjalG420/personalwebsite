import React from "react";

export function Button({ children, button_function }) {
    return (
        <button
            onClick={button_function}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 text-lg text-white tablet:text-xl transition-all tablet:hover:ml-2"
        >
            {children}
        </button>
    );
}
