import React, {FC, useState} from "react"
import {useTypedSelector} from "../hooks/useTypedSelector"
import {useActions} from "../hooks/useActions"
import {Alert, Button} from "reactstrap"
import {Link} from "react-router-dom"
import {password1Check, password2Check, usernameCheck} from "../helpers/authValidChecks"
import RegistrationInputs from "../components/registrationInputs/RegistrationInputs"

const RegistrationPage: FC = () => {

    const [username, setUsername] = useState<string>("")
    const [password1, setPassword1] = useState<string>("")
    const [password2, setPassword2] = useState<string>("")

    const {loading, error} = useTypedSelector(state => state.auth)
    const {registration} = useActions()


    const handlerRegistrationButton = () => {
        const {isValid: password1Valid} = password1Check(password1)
        const {isValid: password2Valid} = password2Check(password1, password2)
        const {isValid: usernameValid} = usernameCheck(username)
        const isValid =
            usernameValid &&
            password1Valid &&
            password2Valid
        if (isValid) {
            registration(username, password1)
        }
    }

    return (
        <div className="container col-md-3 mt-5">
            <h2>Sign up to LK</h2>
            <div>
                <RegistrationInputs
                    username={username}
                    password1={password1}
                    password2={password2}
                    setUsername={setUsername}
                    setPassword1={setPassword1}
                    setPassword2={setPassword2}
                />
                {error ? <Alert className="" color="danger">{error}</Alert> : null}
                <Button
                    onClick={handlerRegistrationButton}
                    color="success"
                    block
                >
                    {loading ? "Signing up..." : "Sign up"}
                </Button>

                <div className="mt-2">
                    <i>Already Registered? <Link to={"/login"}>Sign in</Link></i>
                </div>

            </div>
        </div>
    )
}

export default RegistrationPage