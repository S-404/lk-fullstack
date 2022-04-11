import {Dispatch} from "redux"
import {AuthAction, AuthActionTypes} from "../../../types/store/authTypes"
import AuthService from "../../../services/authService"
import axios from "axios"

export const registration = (username: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.FETCH_USER})
            const response = await AuthService.registration(username, password)
            localStorage.setItem("token", response.data.accessToken)
            dispatch({type: AuthActionTypes.FETCH_USER_SUCCESS, value: response.data.user})
            dispatch({type: AuthActionTypes.SET_AUTH, value: true})
        } catch (e) {
            let errMsg
            if (axios.isAxiosError(e)) {
                errMsg = e?.response?.data?.message
            }
            let message = errMsg ? errMsg : "connection failed"
            dispatch({
                type: AuthActionTypes.FETCH_USER_ERROR,
                value: message
            })
        }
    }

}