import {IUser} from "../services/AuthResponse"

export interface AuthState {
    isAuth: boolean;
    user: IUser;
    loading: boolean;
    error: null | string;
}

export enum AuthActionTypes {
    SET_AUTH = "SET_AUTH",
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

interface SetAuthAction {
    type: AuthActionTypes.SET_AUTH;
    value: boolean;
}


interface FetchUserAction {
    type: AuthActionTypes.FETCH_USER;
}

interface FetchUserSuccessAction {
    type: AuthActionTypes.FETCH_USER_SUCCESS;
    value: IUser;
}

interface FetchUserErrorAction {
    type: AuthActionTypes.FETCH_USER_ERROR;
    value: string;
}


export type  AuthAction =
    SetAuthAction
    | FetchUserAction
    | FetchUserSuccessAction
    | FetchUserErrorAction