import React, {FC, useState} from "react"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {useActions} from "../../hooks/useActions"

const LoginPage: FC = () => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {user, loading, error} = useTypedSelector(state => state.auth)
    const {login, registration} = useActions()

    const handlerUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlerPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handlerLoginButton = () => {
        if (username && password) login(username, password)
    }

    const handlerRegistrationButton = () => {
        if (username && password) registration(username, password)
    }


    return (
        <div>
            <input
                placeholder={"username"}
                value={username}
                onChange={handlerUsernameInput}
            />
            <input
                placeholder={"password"}
                type={"password"}
                value={password}
                onChange={handlerPasswordInput}
            />
            <button onClick={handlerLoginButton}>Login</button>
            <button onClick={handlerRegistrationButton}>Registration</button>
            <div>
                <p>{loading ? "loading..." : ""}</p>
                <p>{error ? error : ""}</p>
                <p>{user.username}</p>
            </div>
        </div>
    )
}

export default LoginPage