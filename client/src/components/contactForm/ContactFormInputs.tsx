import React, {FC, useEffect, useState} from "react"
import {FormFeedback, FormGroup, Input} from "reactstrap"
import {FormChecksTypes, NewContactFormInputsPropsTypes} from "../../types/components/contactFormTypes"
import {formCheckStateInitial} from "../../helpers/initialStates"
import {emailCheck, jobCheck, phoneCheck, usernameCheck} from "../../helpers/contactsChecks"

const ContactFormInputs: FC<NewContactFormInputsPropsTypes> = (
    {
        username,
        email,
        phone,
        job,
        setEmail,
        setUsername,
        setPhone,
        setJob
    }
) => {
    const [formChecks, setFormChecks] = useState<FormChecksTypes>(formCheckStateInitial())

    useEffect(() => {
        const {isValid: usernameIsValid, isInvalid: usernameIsInvalid} = usernameCheck(username)
        const {isValid: jobIsValid, isInvalid: jobIsInvalid} = jobCheck(job)
        const {isValid: phoneIsValid, isInvalid: phoneIsInvalid} = phoneCheck(phone)
        const {isValid: emailIsValid, isInvalid: emailIsInvalid} = emailCheck(email)
        setFormChecks(
            {
                ...formChecks,
                usernameInputInvalid: usernameIsInvalid,
                usernameInputValid: usernameIsValid,
                phoneInputInvalid: phoneIsInvalid,
                phoneInputValid: phoneIsValid,
                emailInputInvalid: emailIsInvalid,
                emailInputValid: emailIsValid,
                jobInputInvalid: jobIsInvalid,
                jobInputValid: jobIsValid,
            })
    }, [username, email, phone])

    const emailOnInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const nameOnInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const phoneOnInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value)
    }
    const jobOnInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJob(e.target.value)
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
                    <span>Use letters and spaces.</span>
                    <br/>
                    <span>Should contain at least 1 character</span>
                </FormFeedback>
            </FormGroup>

            <FormGroup>
                <Input
                    placeholder="job"
                    value={job}
                    onChange={jobOnInputHandler}
                    invalid={formChecks.jobInputInvalid}
                    valid={formChecks.jobInputValid}
                />
                <FormFeedback>
                    <span>Use letters and spaces.</span>
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
                    <span>Invalid phone format. </span>
                    <br/>
                    <span>Use examples:</span>
                    <br/>
                    <span>
                        0(123)123-45-67
                    </span>
                    <br/>
                    <span>
                        1234567890
                    </span>
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