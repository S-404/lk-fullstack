import {Dispatch} from "redux"
import {AuthAction, AuthActionTypes} from "../../types/store/authTypes"
import axios from "axios"
import {API_URL} from "../../api"

export const checkAuth = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.SET_REFRESH_LOADING, value: true})

            //this query doesn't use _api for avoid interceptor
            const response = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true})

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
        } finally {
            dispatch({type: AuthActionTypes.SET_REFRESH_LOADING, value: false})
        }
    }

}