import React from 'react'
import './style.css';

import CardSignup from '../../components/cardsignup';
import Banner from '../../components/banner';

export default function Signup(props) {
    return (
        <div className='loginpage--container'>
            <Banner imgUrl='https://p1.pxfuel.com/preview/399/866/508/texture-task-splash-black.jpg'></Banner>
            <CardSignup></CardSignup>
        </div>
    )
}
