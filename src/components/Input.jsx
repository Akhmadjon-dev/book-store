import React from 'react'

function Input({
    type,
    name,
    placeholder,
    value,
    onChange,
    error,
    label
}) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
            id={name}
            type={type} 
            placeholder={placeholder} 
            name={name}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}

export default Input
