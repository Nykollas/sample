import React from 'react';
import './style.css';
export default function Banner(props) {
    return (
        <div className='banner--container'>
            <img src={props.imgUrl}></img>
        </div>
    )
}
