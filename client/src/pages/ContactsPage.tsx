import React, {FC, useEffect} from "react"
import {Alert, Button, Spinner} from "reactstrap"
import ContactList from "../components/contactList/ContactList"
import MyModal from "../components/UI/MyModal"
import ContactForm from "../components/contactForm/ContactForm"
import {useTypedSelector} from "../hooks/useTypedSelector"
import {useActions} from "../hooks/useActions"
import FilterInput from "../components/FilterInput"

const ContactsPage: FC = () => {

    const {user} = useTypedSelector(state => state.auth)
    const {setModalNewContact, setModalEditContact} = useActions()
    const {loading,error} = useTypedSelector(state => state.contacts)
    const {addContactModal, editContactModal} = useTypedSelector(state => state.modals)
    const {fetchContacts} = useActions()
    useEffect(() => {
        fetchContacts(user.id)
    }, [])

    return (
        <div className="d-flex justify-content-center h-100 overflow-auto">
            <div>
                {error ? <Alert color="danger">{error}</Alert> : null}

                <div className='d-flex flex-row justify-content-between mt-2'>
                    <h3>Contact List:</h3>
                    {loading?<Spinner/>:<></>}
                </div>

                <div className="d-flex flex-row align-items-center justify-content-between">
                    <FilterInput/>
                    <Button
                        color="success"
                        onClick={() => setModalNewContact(true)}
                        value="Add new contact"
                        className="m-2"
                    >
                        Add New Contact
                    </Button>
                </div>

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