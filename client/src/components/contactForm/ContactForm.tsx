import React, {FC, useEffect, useState} from "react"
import {Button} from "reactstrap"
import ContactFormInputs from "./ContactFormInputs"
import {useActions} from "../../hooks/useActions"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {ContactFormTypes} from "../../types/components/ContactFormTypes"

const ContactForm: FC<ContactFormTypes> = ({mode}) => {

    const [email, setEmail] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [inputsIsValid, setInputsIsValid] = useState<boolean>(false)

    const {addContact, editContact, setModalNewContact, setModalEditContact} = useActions()
    const {user} = useTypedSelector(state => state.auth)
    const {contact: selectedContact} = useTypedSelector(state => state.selectedContact)

    useEffect(() => {
        if (mode === "edit") {
            setUsername(selectedContact.username)
            setEmail(selectedContact.email)
            setPhone(selectedContact.phone)
        }

    }, [selectedContact])


    const contactObj = () => {
        return {
            userId: user.id,
            username,
            email,
            phone,
        }
    }

    const applyButtonHandler = () => {
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
                setPhone={setPhone}
                setUsername={setUsername}
                setEmail={setEmail}
                setInputsIsValid={setInputsIsValid}
            />

            <div className="">
                <Button
                    disabled={!inputsIsValid}
                    color="success"
                    onClick={applyButtonHandler}
                >
                    Apply
                </Button>
                <Button onClick={cancelButtonHandler}>Cancel</Button>
            </div>

        </div>
    )
}

export default ContactForm