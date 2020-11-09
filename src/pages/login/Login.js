import React from 'react'
import './style.css';

import CardLogin from '../../components/cardlogin';
import Banner from '../../components/banner';

export default function Login() {
    return (
        <div className='loginpage--container'>
            <Banner imgUrl='https://p1.pxfuel.com/preview/399/866/508/texture-task-splash-black.jpg'></Banner>
            <CardLogin></CardLogin>
        </div>
    )
}
