import React, {FC} from "react"
import {ContactTypes} from "../../types/components/contactsTypes"


const Contact: FC<ContactTypes> = ({contact,index}) => {
    return (
            <tr>
                <th scope="row">{index+1}</th>
                <td>{contact.username}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
            </tr>
    )
}

export default Contact