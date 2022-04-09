import {_api} from '../api'
import {AxiosResponse} from 'axios'
import {AuthResponse} from "../types/services/AuthResponse";

export default class AuthService{

    static async registration(username:string, password:string): Promise<AxiosResponse<AuthResponse>> {
        return _api.post<AuthResponse>('/auth/registration', {username,password})
    }

    static async login(username:string, password:string): Promise<AxiosResponse<AuthResponse>> {
        return _api.post<AuthResponse>('/auth/login', {username,password})
    }

    static async logout(): Promise<void> {
        return _api.post('auth/logout')
    }

}

