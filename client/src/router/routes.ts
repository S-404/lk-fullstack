import LoginPage from "../pages/loginPage/LoginPage";
import UserPage from "../pages/UserPage"


export const privateRoutes = [
    {path: '/user', component: UserPage},
]

export const publicRoutes = [
    {path: '/login', component: LoginPage},
]
