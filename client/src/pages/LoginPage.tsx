import React, {FC, useState} from "react"
import {useTypedSelector} from "../hooks/useTypedSelector"
import {useActions} from "../hooks/useActions"
import {Alert, Button, FormGroup, Input, Label} from "reactstrap"
import {Link} from "react-router-dom"


const LoginPage: FC = () => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {loading, error} = useTypedSelector(state => state.auth)
    const {login} = useActions()

    const handlerUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlerPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handlerLoginButton = () => {
        if (username && password) login(username, password)
    }

    return (
        <div className="w-25 h-50 align-items-center m-auto mt-5">

            <h2>Sign in to LK</h2>

            <div>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                        value={username}
                        onChange={handlerUsernameInput}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        type={"password"}
                        value={password}
                        onChange={handlerPasswordInput}
                    />
                </FormGroup>
                {error ? <Alert className="" color="danger">{error}</Alert> : null}
                <Button
                    color="success"
                    block
                    onClick={handlerLoginButton}
                >
                    {loading ? "Signing in..." : "Sign in"}
                </Button>
                <div className="mt-2">
                    <i>New to LK? <Link to={"/registration"}>Create an account</Link></i>
                </div>

            </div>
        </div>
    )
}

export default LoginPage