import React, {FC, useState} from "react"

const LoginPage: FC = () => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handlerUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const handlerPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
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
            <button>Sign in</button>
            <button>Sign up</button>
        </div>
    )
}

export default LoginPage