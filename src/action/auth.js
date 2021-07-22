import Swal from 'sweetalert2';

import { types } from "../types/types"
import { firebase, googleAuthProvide } from '../firebase/firebase-config'
import { noteLogout } from './notes';

export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {
        try {            
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(login(user.uid, user.displayName));
        } catch (error) {
            Swal.fire('Error', error.message, 'error')
        }
    }
}

export const startGoogleLogin = () => {
    return async (dispatch) => {
        const { user } = await firebase.auth().signInWithPopup(googleAuthProvide);
        dispatch(login(user.uid, user.displayName));
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return async (dispatch) => {
        try {
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await user.updateProfile({ displayName: name });
            dispatch(login(user.uid, user.displayName))
        } catch (error) {
            Swal.fire('Error', error.message, 'error')
        }
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch( noteLogout() );
        dispatch( logOut() );
    }
}


export const logOut = () => ({
    type: types.logout,
})