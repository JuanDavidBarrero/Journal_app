import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Redirect, } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config'

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../action/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import {  startLoadingNotes } from '../action/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLogged(true)

                dispatch( startLoadingNotes(user.uid) )

            } else {
                setIsLogged(false)
            }

        });

    }, [dispatch, setIsLogged])

    return (
        <Router>
            <Switch>
                <PublicRoute isAuth={isLogged} path="/auth" component={AuthRouter} />
                <PrivateRoute isAuth={isLogged} path="/" exact component={JournalScreen} />
                <Redirect to="/auth/login" />
            </Switch>
        </Router >
    )
}
