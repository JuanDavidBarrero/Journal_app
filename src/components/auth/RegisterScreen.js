import React from 'react'
import { Link } from 'react-router-dom'
import validador from 'validator'
import {useDispatch} from 'react-redux'

import { useForm } from '../../hooks/useForm'
import { startRegisterWithEmailPasswordName } from '../../action/auth'

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [formValue, handleInputaChange] = useForm({
        name: 'Hades',
        email: 'hades@gmail.com',
        password:'123456',
        password2:'123456'
    })

    const { name, email, password, password2 } = formValue;

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName(email,password,name) )
        }
    }

    const isFormValid = () => {
        if (name.trim() === 0) {
            console.log('Es necesario un nombre');
            return false;
        }
        else if (!validador.isEmail(email)) {
            console.log('email no valida');
            return false;
        }
        else if (password.trim() !== password2.trim() || password.length < 4) {
            console.log('Contraña no son iguales');
            return false;
        }

        return true;
    }


    return (
        <>
            <h3 className="auth__title mb-5" >Register</h3>

            <form onSubmit={handleSubmit}>
                <small className="auth__text">Enter your name</small>
                <input className="auth__input mb-1" placeholder="Name" type="text" autoComplete="off" name="name" value={name} onChange={handleInputaChange} />
                <small className="auth__text">Enter your email</small>
                <input className="auth__input mb-1" placeholder="Email" type="email" autoComplete="off" name="email" value={email} onChange={handleInputaChange} />
                <small className="auth__text">Enter your password</small>
                <input className="auth__input mb-1" placeholder="Password" type="password" name="password" value={password} onChange={handleInputaChange} />
                <small className="auth__text">Please repeat your password</small>
                <input className="auth__input mb-1" placeholder="Repeat password" type="password" name="password2" value={password2} onChange={handleInputaChange} />
                <button type="submit" className="btn btn-primary mb-5"> Register </button>
            </form>



            <Link className="link" to="/auth/login">Alredy registered?</Link>
        </>
    )
}
