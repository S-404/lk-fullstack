import React, {FC, useState} from "react"
import {ContactsTypes} from "../../types/components/contactsTypes"
import Contact from "./Contact"
import {Table} from "reactstrap"

const Contacts: FC<ContactsTypes> = ({contacts}) => {

    const [heads] = useState<string[]>(["#", "Name", "Phone", "Email"])

    return (
        <div>
            <Table hover size="">
                <thead>
                <tr>
                    {heads.map((head,index) => (
                        <th key={index}>{head}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact, index) => (
                    <Contact key={contact.id} contact={contact} index={index}/>
                ))}
                </tbody>
            </Table>

        </div>
    )
}

export default Contacts