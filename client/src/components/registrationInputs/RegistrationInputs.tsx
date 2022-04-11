import React, {FC, useEffect, useState} from "react"
import {FormFeedback, FormGroup, Input, Label} from "reactstrap"
import {RegistrationCheckFormState, RegistrationInputsTypes} from "../../types/components/authInputsTypes"
import {RegistrationCheckFormInitState} from "../../helpers/initialStates"
import {password1Check, password2Check, usernameCheck} from "../../helpers/authValidChecks"


const RegistrationInputs: FC<RegistrationInputsTypes> = (
    {
        username,
        password1,
        password2,
        setUsername,
        setPassword1,
        setPassword2
    }
) => {

    const [formChecks, setFormChecks] = useState<RegistrationCheckFormState>(RegistrationCheckFormInitState())

    useEffect(() => {
        const {isValid: usernameIsValid, isInvalid: usernameIsInvalid} = usernameCheck(username)
        const {isValid: password1IsValid, isInvalid: password1IsInvalid} = password1Check(password1)
        const {isValid: password2IsValid, isInvalid: password2IsInvalid} = password2Check(password1, password2)

        setFormChecks({
            ...formChecks,
            password2IsValid: password2IsValid,
            password2IsInvalid: password2IsInvalid,
            password1IsValid: password1IsValid,
            password1IsInvalid: password1IsInvalid,
            usernameIsValid: usernameIsValid,
            usernameIsInvalid: usernameIsInvalid
        })
    }, [username, password1, password2])


    const handlerUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlerPassword1Input = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword1(e.target.value)
    }
    const handlerPassword2Input = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value)
    }
    return (
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
                    Use Letters and Spaces.
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
                    <span>Should contain at least one digit</span>
                    <br/>
                    <span>Should contain at least 4 characters</span>

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
        </div>
    )
}

export default RegistrationInputs