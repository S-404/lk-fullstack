import React, {FC} from "react"
import Contact from "./Contact"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {useFilteredContactList} from "../../hooks/useContacts"

const ContactList: FC = () => {

    const {contacts} = useTypedSelector(state => state.contacts)
    const {filter} = useTypedSelector(state => state.filterContacts)

    const contactList = useFilteredContactList(contacts, filter)

    return (

        <div className="contact-list">
            <div className="">
                {contactList.map((contact, index) => (
                    <Contact key={contact.id} contact={contact} index={index}/>
                ))}
            </div>

        </div>

    )
}

export default ContactList