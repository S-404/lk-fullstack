import axios from 'axios'
import {AxiosRequestConfig} from 'axios'

export const API_URL = process.env.REACT_APP_BACKEND_ADDRESS

export const _api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

_api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers === undefined) config.headers = {}
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})
