import React from 'react'
import './mystyle.css'

function stylessheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>stylessheet</h1>
        </div>
    )
}

export default stylessheet