import LoginPage from "../pages/loginPage/LoginPage";
import UserPage from "../pages/UserPage"
import {RoutesTypes} from "../types/router/routesTypes"


export const privateRoutes:RoutesTypes[] = [
    {path: '/user', component: UserPage},
]

export const publicRoutes:RoutesTypes[] = [
    {path: '/login', component: LoginPage},
]
