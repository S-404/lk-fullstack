import React, {FC, useEffect, useState} from "react"
import {useTypedSelector} from "../hooks/useTypedSelector"
import {useActions} from "../hooks/useActions"
import {Alert, Button, FormFeedback, FormGroup, Input, Label} from "reactstrap"
import {Link} from "react-router-dom"
import {password1Check, password2Check, usernameCheck} from "../helpers/validate"

interface RegistrationCheckFormState {
    usernameIsValid: boolean;
    usernameIsInvalid: boolean;
    password1IsValid: boolean;
    password1IsInvalid: boolean;
    password2IsValid: boolean;
    password2IsInvalid: boolean;
}

const RegistrationPage: FC = () => {

    const [username, setUsername] = useState<string>("")
    const [password1, setPasswordFirst] = useState<string>("")
    const [password2, setPasswordSecond] = useState<string>("")
    const [formChecks, setFormChecks] = useState<RegistrationCheckFormState>({
        usernameIsValid: false,
        usernameIsInvalid: false,
        password1IsValid: false,
        password1IsInvalid: false,
        password2IsValid: false,
        password2IsInvalid: false,
    })

    const {loading, error} = useTypedSelector(state => state.auth)
    const {registration} = useActions()


    useEffect(() => {
        const {isValid, isInvalid} = usernameCheck(username)
        setFormChecks({...formChecks, usernameIsValid: isValid, usernameIsInvalid: isInvalid})
    }, [username])

    useEffect(() => {
        const {isValid, isInvalid} = password1Check(password1)
        console.log(isValid)
        setFormChecks({...formChecks, password1IsValid: isValid, password1IsInvalid: isInvalid})
    }, [password1])

    useEffect(() => {
        const {isValid, isInvalid} = password2Check(password1, password2)
        setFormChecks({...formChecks, password2IsValid: isValid, password2IsInvalid: isInvalid})
    }, [password2])


    const handlerUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlerPassword1Input = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordFirst(e.target.value)
    }
    const handlerPassword2Input = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordSecond(e.target.value)
    }


    const handlerRegistrationButton = () => {
        const {isValid: password1Valid} = password1Check(password1)
        const {isValid: password2Valid} = password2Check(password1, password2)
        const {isValid: usernameValid} = usernameCheck(username)
        const isValid = password1Valid && password2Valid && usernameValid
        if (isValid) {
            registration(username, password1)
        } else {
            console.log(formChecks.password1IsValid, formChecks.password2IsValid, formChecks.usernameIsValid)
        }
    }


    return (
        <div className="w-25 h-50 align-items-center m-auto mt-5">
            <h2>Sign up to LK</h2>
            <div>
                <FormGroup>
                    <Label>Choose username</Label>
                    <Input
                        value={username}
                        onChange={handlerUsernameInput}
                        invalid={formChecks.usernameIsInvalid}
                        valid={formChecks.usernameIsValid}
                        autoComplete="none"
                    />
                    <FormFeedback>
                        Invalid Characters. Use Letters and Spaces.
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        type={"password"}
                        value={password1}
                        onChange={handlerPassword1Input}
                        invalid={formChecks.password1IsInvalid}
                        valid={formChecks.password1IsValid}
                    />
                    <FormFeedback>
                        Invalid Characters.
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label>Repeat Password</Label>
                    <Input
                        type={"password"}
                        value={password2}
                        onChange={handlerPassword2Input}
                        invalid={formChecks.password2IsInvalid}
                        valid={formChecks.password2IsValid}
                    />
                    <FormFeedback>
                        Please make sure your passwords match.
                    </FormFeedback>
                </FormGroup>
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