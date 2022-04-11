import React, {FC, useEffect} from "react"
import {BrowserRouter as Router,} from "react-router-dom"
import AppRouter from "./router/appRouter"
import {useActions} from "./hooks/useActions"
import {useTypedSelector} from "./hooks/useTypedSelector"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavBar from "./components/UI/MyNavbar"
import "../src/styles/App.css"

const App: FC = () => {

    const {checkAuth} = useActions()
    const {refreshLoading,isAuth} = useTypedSelector(state => state.auth)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            checkAuth()
        }
    }, [])

    if(refreshLoading)return <div>Loading...</div>

    return (
        <Router>
            {isAuth?<MyNavBar/>:null}
            <AppRouter/>
        </Router>
    )
}

export default App
