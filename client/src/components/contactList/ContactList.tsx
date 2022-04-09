import React, {FC, useEffect} from "react"
import Contacts from "./Contacts"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {useActions} from "../../hooks/useActions"

const ContactList: FC = () => {

    const {user} = useTypedSelector(state => state.auth)
    const {contacts, loading, error} = useTypedSelector(state => state.contacts)
    const {fetchContacts} = useActions()

    useEffect(() => {
        fetchContacts(user.id)
    }, [])

    return (
        <div>
            <h3>Contact List:</h3>
            <Contacts contacts={contacts}/>
        </div>
    )
}

export default ContactList