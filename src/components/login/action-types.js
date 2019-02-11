import firebase from 'firebase';
import db from '../../firebase/firebase'

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_AUTHORIZING = 'FETCH_USER_AUTHORIZING';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_AUTHORIZED = 'FETCH_USER_AUTHORIZED';
export const SET_USER_UNAUTHORIZED = 'SET_USER_UNAUTHORIZED';

export const googleLogin = (dispatch, getState) => {
    return function (dispatch, getState) {
        dispatch(fetchUser());
        
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');

        firebase.auth().signInWithPopup(provider)
            .then(async response => {    
              console.log(response)            
                const { displayName, email, uid } = response.user;
                const userProfile = {
                    name: displayName,
                    email: email,
                    id: uid,
                };

                dispatch(setUser(userProfile));
                console.log(userProfile);
                const userExists = await db.collection('auth').doc(email).get().then(resp => resp.exists);

                if (userExists) return;

                db.collection('auth')
                    .doc(`${email}`)
                    .set(userProfile);
            })  
    }
};

export const googleLogout = () => {
    return function (dispatch) {
        firebase.auth().signOut().then(() => {
            dispatch(userLogout());
        });
    }
};

export const userLogout = () => ({
    type: SET_USER_UNAUTHORIZED
});

export const setUser = (userProfile) => ({
    type: FETCH_USER_AUTHORIZED,
    payload: userProfile,
});

export const fetchUser = () => ({
    type: FETCH_USER
});

export const userAuthorized = (response) => ({
    type: FETCH_USER_AUTHORIZED
});

export const userFail = () => ({
    type: FETCH_USER_ERROR
});

export const checkUserExists = () => console.log('it worked');