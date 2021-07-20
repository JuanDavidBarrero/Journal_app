import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../action/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLogged(true)
            }else{
                setIsLogged(false)
            }
        });
    }, [dispatch,setIsLogged])

    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouter} />
                <Route path="/" exact component={JournalScreen} />
                <Redirect to="/auth/login" />
            </Switch>
        </Router >
    )
}
