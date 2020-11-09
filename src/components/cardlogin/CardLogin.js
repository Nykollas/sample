import React from 'react'
import './style.css';

import Input from '../input';
import Button from '../button';

export default function CardLogin() {
    return (
        <div className='cardlogin--container'>
            <label id='title'>Login</label>
            <Input type='text' placeholder='Email'></Input>
            <Input type='password' placeholder='Senha'></Input>
            <div className='forgot--input'>
                <input id='passwd-forgot' type='checkbox'></input>
                <label for='passwd-forgot'>Lembrar minha senha</label>
            </div>
            <Button onClick={() => {}} label='Entrar'></Button>
            <div>
               <p> Não possui conta ? <a href='/signup'>Cadastrar</a></p>
            </div>
            
        </div>
    )
}
