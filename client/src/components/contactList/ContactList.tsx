import React, {FC, useState} from "react"
import Contact from "./Contact"
import {Table} from "reactstrap"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {useFilteredContactList} from "../../hooks/useContacts"

const ContactList: FC = () => {

    const [heads] = useState<string[]>(["#", "Name", "Phone", "Email", "", ""])
    const {contacts} = useTypedSelector(state => state.contacts)
    const {filter} = useTypedSelector(state => state.filterContacts)

    const contactList = useFilteredContactList(contacts,filter)

    return (

        <div className="position-relative h-50 overflow-auto">
            <Table hover>
                <thead className="position-sticky top-0 bg-body">
                <tr>
                    {heads.map((head, index) => (
                        <th key={index}>{head}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {contactList.map((contact, index) => (
                    <Contact key={contact.id} contact={contact} index={index}/>
                ))}
                </tbody>
            </Table>
        </div>

    )
}

export default ContactList