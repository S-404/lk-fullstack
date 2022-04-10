import React, {FC, useEffect, useState} from "react"
import Contacts from "./Contacts"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {useActions} from "../../hooks/useActions"
import {Button} from "reactstrap"
import MyModal from "../UI/MyModal"

const ContactList: FC = () => {

    const {user} = useTypedSelector(state => state.auth)
    const {contacts, loading, error} = useTypedSelector(state => state.contacts)
    const {fetchContacts} = useActions()
    const [newContactFormVisible, setNewContactFormVisible] = useState<boolean>(false)


    useEffect(() => {
        fetchContacts(user.id)
    }, [])


    return (
        <div>
            <h3>Contact List:</h3>
            <Contacts contacts={contacts}/>
            <Button
                color="success"
                onClick={() => setNewContactFormVisible(true)}
            >Add new contact</Button>
            <MyModal
                visible={newContactFormVisible}
                setVisible={setNewContactFormVisible}
                action={() => {
                }}
            >
                <></>
            </MyModal>

        </div>
    )
}

export default ContactList