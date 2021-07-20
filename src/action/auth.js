import { types } from "../types/types"
import { firebase, googleAuthProvide } from '../firebase/firebase-config'

export const startLoginEmailPasswotd = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'pedro'))
        }, 3500);
    }
}

export const startGoogleLogin = () => {
    return async (dispatch) => {
        const { user } = await firebase.auth().signInWithPopup(googleAuthProvide);
        dispatch(login(user.uid, user.displayName));
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
