import React, {FC, useEffect} from "react"
import {Alert, Button} from "reactstrap"
import ContactList from "../components/contactList/ContactList"
import MyModal from "../components/UI/MyModal"
import ContactForm from "../components/contactForm/ContactForm"
import {useTypedSelector} from "../hooks/useTypedSelector"
import {useActions} from "../hooks/useActions"

const ContactsPage: FC = () => {

    const {user} = useTypedSelector(state => state.auth)
    const {setModalNewContact, setModalEditContact} = useActions()
    const {error} = useTypedSelector(state => state.contacts)
    const {addContactModal, editContactModal} = useTypedSelector(state => state.modals)
    const {fetchContacts} = useActions()
    useEffect(() => {
        fetchContacts(user.id)
    }, [])


    return (
        <div className="d-flex justify-content-center h-75 overflow-auto">
            <div>
                {error ? <Alert color="danger">{error}</Alert> : null}

                <h3>Contact List:</h3>

                <Button
                    color="success"
                    onClick={() => setModalNewContact(true)}
                    value="Add new contact"
                    className="m-2"
                >
                    Add
                </Button>

                <ContactList/>

                <MyModal
                    visible={addContactModal}
                    setVisible={setModalNewContact}
                    title={"Add New Contact"}
                >
                    <ContactForm mode="add"/>
                </MyModal>

                <MyModal
                    visible={editContactModal}
                    setVisible={setModalEditContact}
                    title={"Edit Contact"}
                >
                    <ContactForm mode="edit"/>
                </MyModal>

            </div>
        </div>
    )
}

export default ContactsPage