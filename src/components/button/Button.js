import React from 'react'
import './style.css';
export default function Button(props) {
    return (
        <div className='button--container'>
            <button>{props.label}</button>
        </div>
    )
}
