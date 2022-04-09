import React, {FC, useEffect} from "react"
import {BrowserRouter as Router,} from "react-router-dom"
import AppRouter from "./router/appRouter"
import {useActions} from "./hooks/useActions"
import NavPanel from "./components/NavPanel"
import {useTypedSelector} from "./hooks/useTypedSelector"


const App: FC = () => {

    const {checkAuth} = useActions()
    const {refreshLoading} = useTypedSelector(state => state.auth)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            checkAuth()
        }
    }, [])

    if(refreshLoading)return <div>Loading...</div>

    return (
        <Router>
            <NavPanel/>
            <AppRouter/>
        </Router>
    )
}

export default App
