import React, {FC, useEffect, useState} from "react"
import {Button} from "reactstrap"
import ContactFormInputs from "./ContactFormInputs"
import {useActions} from "../../hooks/useActions"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {ContactFormTypes} from "../../types/components/contactFormTypes"
import {emailCheck, jobCheck, phoneCheck, usernameCheck} from "../../helpers/contactsChecks"

const ContactForm: FC<ContactFormTypes> = ({mode}) => {

    const [email, setEmail] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [job, setJob] = useState<string>("")

    const {addContact, editContact, setModalNewContact, setModalEditContact} = useActions()
    const {user} = useTypedSelector(state => state.auth)
    const {contact: selectedContact} = useTypedSelector(state => state.selectedContact)

    useEffect(() => {
        if (mode === "edit") {
            setUsername(selectedContact.username)
            setEmail(selectedContact.email)
            setPhone(selectedContact.phone)
            setJob(selectedContact.job)
        }

    }, [selectedContact])


    const contactObj = () => {
        return {
            userId: user.id,
            username,
            email,
            phone,
            job
        }
    }

    const applyButtonHandler = () => {
        const {isValid: usernameIsValid} = usernameCheck(username)
        const {isValid: jobIsValid} = jobCheck(job)
        const {isValid: emailIsValid} = emailCheck(email)
        const {isValid: phoneIsValid} = phoneCheck(phone)
        const inputsIsValid = usernameIsValid && emailIsValid && phoneIsValid && jobIsValid
        if (inputsIsValid) {
            switch (mode) {
                case "edit":
                    editContact({data: contactObj(), id: selectedContact.id})
                    break
                case "add":
                    addContact(contactObj())
                    break
                default:
                    break
            }
            cancelButtonHandler()
        } else {

        }
    }

    const cancelButtonHandler = () => {
        setModalNewContact(false)
        setModalEditContact(false)
    }

    return (
        <div>
            <ContactFormInputs
                email={email}
                username={username}
                phone={phone}
                job={job}
                setPhone={setPhone}
                setUsername={setUsername}
                setEmail={setEmail}
                setJob={setJob}
            />

            <div className="d-flex flex-row justify-content-between">
                <Button onClick={cancelButtonHandler}>Cancel</Button>
                <Button
                    color="success"
                    onClick={applyButtonHandler}
                >
                    Apply
                </Button>

            </div>

        </div>
    )
}

export default ContactForm