import {IUser} from "../services/authResponse"

export interface AuthState {
    isAuth: boolean;
    refreshLoading: boolean;
    user: IUser;
    loading: boolean;
    error: null | string;
}

export enum AuthActionTypes {
    SET_AUTH = "SET_AUTH",
    SET_REFRESH_LOADING = "SET_REFRESH_LOADING",
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

interface SetAuthAction {
    type: AuthActionTypes.SET_AUTH;
    value: boolean;
}

interface SetRefreshAction {
    type: AuthActionTypes.SET_REFRESH_LOADING;
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
    | SetRefreshAction
    | FetchUserAction
    | FetchUserSuccessAction
    | FetchUserErrorAction