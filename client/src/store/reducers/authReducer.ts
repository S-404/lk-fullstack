import {AuthAction, AuthActionTypes, AuthState} from "../../types/store/authTypes"
import {IUser} from "../../types/services/AuthResponse"

const authState: AuthState = {
    isAuth: false,
    refreshLoading: false,
    user: {} as IUser,
    loading: false,
    error: null
}

export const isAuthReducer = (state = authState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH:
            return {...state, isAuth: action.value}
        case AuthActionTypes.SET_REFRESH_LOADING:
            return {...state, refreshLoading: action.value}
        case AuthActionTypes.FETCH_USER:
            return {...state, loading: true, error: null, user: {} as IUser}
        case AuthActionTypes.FETCH_USER_SUCCESS:
            return {...state, error: null, loading: false, user: action.value}
        case AuthActionTypes.FETCH_USER_ERROR:
            return {...state, loading: false, error: action.value, user: {} as IUser}
        default:
            return state
    }
}

