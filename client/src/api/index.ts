import axios, {AxiosRequestConfig} from "axios"

export const API_URL = process.env.REACT_APP_SERVER_URL

export const _api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

_api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers === undefined) config.headers = {}
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})
