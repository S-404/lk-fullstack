import LoginPage from "../pages/LoginPage";
import UserPage from "../pages/UserPage"
import {RoutesTypes} from "../types/router/routesTypes"
import ContactsPage from "../pages/ContactsPage"


export const privateRoutes:RoutesTypes[] = [
    {path: '/user', component: UserPage, shortName: 'Personal Page'},
    {path: '/contacts', component: ContactsPage, shortName: 'Contact List'},
]

export const publicRoutes:RoutesTypes[] = [
    {path: '/login', component: LoginPage, shortName: 'Login Page'},
]
