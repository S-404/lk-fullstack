import React, {FC} from "react"
import {ContactTypes} from "../../types/components/contactsTypes"


const Contact: FC<ContactTypes> = ({contact}) => {
    return (
        <div>
            <span>{contact.username}</span>
            <span>{contact.phone}</span>
            <span>{contact.email}</span>
        </div>
    )
}

export default Contact