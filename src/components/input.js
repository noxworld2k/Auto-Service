import React from 'react';

export function Input({ label, type, name, value, errorMessage, onChange }) {
    return (
        <label>
            {label}: {errorMessage && <span className="error-message">({errorMessage})</span>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}