import React, {FC} from "react"
import {ContactsTypes} from "../../types/components/contactsTypes"
import Contact from "./Contact"

const Contacts: FC<ContactsTypes> = ({contacts}) => {
    return (
        <div>
            {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact}/>
            ))}
        </div>
    )
}

export default Contacts