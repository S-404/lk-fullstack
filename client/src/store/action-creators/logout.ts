import {Dispatch} from "redux"
import {AuthAction, AuthActionTypes} from "../../types/store/authTypes"
import AuthService from "../../services/authService"
import {IUser} from "../../types/services/AuthResponse"

export const logout = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.FETCH_USER})
            await AuthService.logout()
            localStorage.removeItem('token')
            dispatch({type: AuthActionTypes.FETCH_USER_SUCCESS, value: {} as IUser})
            dispatch({type: AuthActionTypes.SET_AUTH, value: false})
        } catch (e) {
            dispatch({
                type: AuthActionTypes.FETCH_USER_ERROR,
                value: "password verification error: connection failed"
            })
        }
    }

}