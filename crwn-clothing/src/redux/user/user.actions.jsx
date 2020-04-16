import UserActionsTypes from './user.types'

export const googleSignInStart = () => ({
    type: UserActionsTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionsTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});


export const SignInSuccess = (user) => ({
    type: UserActionsTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const SignInFailure = error => ({
    type: UserActionsTypes.SIGN_IN_FAILURE,
    payload: error
});

export const checkUserSesion = () => ({
    type: UserActionsTypes.CHECK_USER_SESION
});

export const signOutStart = () => ({
    type: UserActionsTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionsTypes.SIGN_OUT_SUCCESS,

});

export const signOutFailure = (error) => ({
    type: UserActionsTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = (userCredentials) => ({
    type: UserActionsTypes.SIGN_UP_START,
    payload: userCredentials
});

export const signUpSuccess = ({user, additionalData}) => ({
    type: UserActionsTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
});

export const signUpFailure = error => ({
    type: UserActionsTypes.SIGN_OUT_FAILURE,
    payload: error
});

