import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title mb-5" >Register</h3>

            <form>
                <small className="auth__text">Enter your name</small>
                <input className="auth__input mb-1" placeholder="Name" type="text" autoComplete="off" name="name" />
                <small className="auth__text">Enter your email</small>
                <input className="auth__input mb-1" placeholder="Email" type="email" autoComplete="off" name="email" />
                <small className="auth__text">Enter your password</small>
                <input className="auth__input mb-1" placeholder="Password" type="password" name="password" />
                <small className="auth__text">Please repeat your password</small>
                <input className="auth__input mb-1" placeholder="Repeat password" type="password" name="password2" />
                <button type="submit" className="btn btn-primary mb-5"> Register </button>
            </form>



            <Link className="link" to="/auth/login">Alredy registered?</Link>
        </>
    )
}
