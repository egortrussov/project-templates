import React from 'react'

import './css/style.css'

const Input = ({ name, onChange, type, isMini, value, label, errorMsg }) => {
    const handleChange = (e) => {
        onChange(e);
    }

    const extraClassName = isMini ? 'mini' : '';

    return (
        <div className={ "input-group " + extraClassName}>
            <div className="label">
                { label }
            </div>
            <input value={ value } autoComplete={ isMini ? "off" : "on" } className={ extraClassName } type={ type } name={ name } onChange={ (e) => handleChange(e) } />
            <label htmlFor={ name }></label>
            <div className="error-msg">
                { errorMsg }
            </div>
        </div>
    )
}

export default Input