import React from 'react'
import './style.css';
export default function Input(props) {
    return (
        <div className='input--container'>
            <input onChange={props.onChange} type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
}
