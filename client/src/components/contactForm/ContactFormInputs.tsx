import React, {FC, useEffect, useState} from "react"
import {isValidEmail, isValidNameInput, isValidPhoneInput} from "../../helpers/validate"
import {FormFeedback, FormGroup, Input} from "reactstrap"
import {FormChecksTypes, NewContactFormInputsPropsTypes} from "../../types/components/ContactFormTypes"


const ContactFormInputs: FC<NewContactFormInputsPropsTypes> = (
    {
        username,
        email,
        phone,
        setEmail,
        setUsername,
        setPhone,
        setInputsIsValid
    }
) => {
    const [formChecks, setFormChecks] = useState<FormChecksTypes>({
        emailInputValid: false,
        emailInputInvalid: false,
        usernameInputValid: false,
        usernameInputInvalid: false,
        phoneInputValid: false,
        phoneInputInvalid: false
    })

    useEffect(() => {
        const isValidName = formChecks.usernameInputValid
        const isValidEmail = formChecks.emailInputValid || email.length === 0
        const isValidPhone = formChecks.phoneInputValid || phone.length === 0
        const isValid = isValidName && isValidEmail && isValidPhone
        setInputsIsValid(isValid)
    }, [formChecks])

    useEffect(() => {
        const isValid = isValidNameInput(username) && username.length > 0
        const isInvalid = !isValid && username.length > 0
        setFormChecks({...formChecks, usernameInputInvalid: isInvalid, usernameInputValid: isValid})
    }, [username])

    useEffect(() => {
        const isValid = isValidEmail(email)
        const isInvalid = !isValid && email.length > 0
        setFormChecks({...formChecks, emailInputInvalid: isInvalid, emailInputValid: isValid})
    }, [email])


    useEffect(() => {
        const isValid = isValidPhoneInput(phone)
        const isInvalid = !isValid && phone.length > 0
        setFormChecks({...formChecks, phoneInputInvalid: isInvalid, phoneInputValid: isValid})
    }, [phone])

    const emailOnInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const nameOnInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const phoneOnInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value)
    }


    return (
        <div>
            <FormGroup>
                <Input
                    placeholder="name"
                    value={username}
                    onChange={nameOnInputHandler}
                    invalid={formChecks.usernameInputInvalid}
                    valid={formChecks.usernameInputValid}
                />
                <FormFeedback>
                    Invalid Characters. Use Letters and Spaces.
                </FormFeedback>
            </FormGroup>

            <FormGroup>
                <Input
                    placeholder="phone"
                    value={phone}
                    onChange={phoneOnInputHandler}
                    invalid={formChecks.phoneInputInvalid}
                    valid={formChecks.phoneInputValid}
                />
                <FormFeedback>
                    Invalid Format
                </FormFeedback>
            </FormGroup>

            <FormGroup>
                <Input
                    value={email}
                    onChange={emailOnInputHandler}
                    placeholder="email"
                    invalid={formChecks.emailInputInvalid}
                    valid={formChecks.emailInputValid}
                />
                <FormFeedback>
                    Invalid Email Format.
                </FormFeedback>
            </FormGroup>
        </div>
    )
}

export default ContactFormInputs