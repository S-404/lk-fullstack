import LoginPage from "../pages/LoginPage";
import UserPage from "../pages/UserPage"
import {RoutesTypes} from "../types/router/routesTypes"
import ContactsPage from "../pages/ContactsPage"
import RegistrationPage from "../pages/RegistrationPage"


export const privateRoutes:RoutesTypes[] = [
    {path: '/user', component: UserPage, shortName: 'Personal Page'},
    {path: '/contacts', component: ContactsPage, shortName: 'Contact List'},
]

export const publicRoutes:RoutesTypes[] = [
    {path: '/login', component: LoginPage, shortName: 'Login Page'},
    {path: '/registration', component: RegistrationPage, shortName: 'Registration Page'},
]
