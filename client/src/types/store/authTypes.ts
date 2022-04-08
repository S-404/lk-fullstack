export interface AuthState {
    isAuth: boolean;
}

export enum AuthActionTypes {
    SET_AUTH = "SET_AUTH",
}

interface SetAuthAction {
    type: AuthActionTypes.SET_AUTH;
    value: boolean;
}

export type  AuthAction = SetAuthAction