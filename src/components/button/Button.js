import React from 'react'
import './style.css';
export default function Button(props) {
    return (
        <div className='button--container'>
            <button onClick={props.onClick}>{props.label}</button>
        </div>
    )
}
