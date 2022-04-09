import React, {FC} from "react"
import {Route, Routes} from "react-router-dom"
import {privateRoutes, publicRoutes} from "./routes"
import LoginPage from "../pages/loginPage/LoginPage"
import {useTypedSelector} from "../hooks/useTypedSelector"
import UserPage from "../pages/UserPage"

const AppRouter:FC = () => {
    const isAuth = useTypedSelector(state => state.auth.isAuth)
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map((route) =>
                    <Route
                        key={Date.now() + route.path}
                        path={route.path}
                        element={<route.component/>}
                    />
                )}

                <Route path="*" element={<UserPage/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route) =>
                    <Route
                        key={Date.now() + route.path}
                        path={route.path}
                        element={<route.component/>}
                    />
                )}
                <Route path="*" element={<LoginPage/>}/>
            </Routes>
    )
}

export default AppRouter