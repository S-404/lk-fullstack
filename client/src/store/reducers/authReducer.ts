import {AuthAction, AuthActionTypes, AuthState} from "../../types/store/authTypes";

const authState: AuthState = {
    isAuth: false
}

export const isAuthReducer = (state = authState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH:
            return {isAuth: action.value}
        default:
            return state
    }
}

