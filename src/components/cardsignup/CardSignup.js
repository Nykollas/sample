import React from 'react'
import './style.css';

import Input from '../input';
import Button from '../button';

export default function CardSignup() {

    //Button handler
    //Método executado quando o botão for clicado  
    const onClickButton = (event) => {

    }

    //Inputs Handler
    //Método executado quando o valor dos inputs é alterado
    const onEmailChange = (e) => {
        console.log(e.target.value);
    }

    const onPasswordChange = (e) => {
        console.log(e.target.value);
    }

    const onPasswordConfirmationChange = (e) => {
        console.log(e.target.value);
    }




    return (
        <div className='cardlogin--container'>
            <label id='title'>Cadastro</label>
            <Input onChange={onEmailChange} type='text' placeholder='Email'></Input>
            <Input onChange={onPasswordChange} type='password' placeholder='Senha'></Input>
            <Input onChange={onPasswordConfirmationChange} type='password' placeholder='Confirmar Senha'></Input>
            <div className='forgot--input'>
                <input id='passwd-forgot' type='checkbox'></input>
                <label for='passwd-forgot'>Lembrar minha senha</label>
            </div>
            <Button onClick={onClickButton} label='Cadastrar'></Button>
            <div>
               <p> Já possui uma conta ? <a href='/login'>Fazer Login</a></p>
            </div>
            
        </div>
    )
}
