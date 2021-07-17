import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title mb-5" >Login</h3>

            <form>
                <small className="auth__text">Enter your email</small>
                <input className="auth__input mb-1" placeholder="Email" type="email" autoComplete="off" name="email" />
                <small className="auth__text">Enter your password</small>
                <input className="auth__input mb-1" placeholder="Password" type="password" name="password" />
                <button type="submit" className="btn btn-primary"> Login </button>
            </form>

            <small className="auth__text mt-1">Loggin with social networks</small>
                <div className="auth__social-networks mt-1 mb-1 pointer">
                <div className="auth__img_google"><img src="https://avatars.githubusercontent.com/u/7328930?v=4" alt="Google" /></div>
                <button>Sing up with google</button>
            </div>

            <Link  className="link" to="/auth/register" >Create new account</Link>

        </>
    )
}
