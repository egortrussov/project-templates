import React from 'react'

import './css/Spinner.css'

const Spinner = ({ size, isWhite }) => {
    console.log(size);
    const extraClassName = size;
    const whiteClass = isWhite ? 'white' : '';

    return (
        <div className={ "loader-wrapper " + extraClassName + " " + whiteClass }>
            <div className={ "loader " + extraClassName }></div>
        </div>
        
    )
}

export default Spinner