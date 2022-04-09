import {Dispatch} from "redux"
import {AuthAction, AuthActionTypes} from "../../types/store/authTypes"
import AuthService from "../../services/authService"

export const login = (username: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.FETCH_USER})
            const response = await AuthService.login(username, password)
            localStorage.setItem("token", response.data.accessToken)
            dispatch({type: AuthActionTypes.FETCH_USER_SUCCESS, value: response.data.user})
            dispatch({type: AuthActionTypes.SET_AUTH, value: true})
        } catch (e) {
            dispatch({
                type: AuthActionTypes.FETCH_USER_ERROR,
                value: "password verification error: connection failed"
            })
        }
    }

}