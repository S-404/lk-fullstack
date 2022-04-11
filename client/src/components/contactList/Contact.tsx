import React, {FC} from "react"
import {ContactTypes} from "../../types/components/contactsTypes"
import {Button} from "reactstrap"
import {useActions} from "../../hooks/useActions"


const Contact: FC<ContactTypes> = ({contact, index}) => {

    const {removeContact, setModalEditContact, setSelectedContact} = useActions()

    const removeButtonHandler = () => {
        removeContact(contact.id)
    }
    const editButtonHandler = () => {
        setSelectedContact(contact)
        setModalEditContact(true)
    }

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{contact.username}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>
                <Button
                    color="danger"
                    outline
                    onClick={removeButtonHandler}
                >
                    remove
                </Button>
            </td>
            <td>
                <Button
                    color="secondary"
                    outline
                    onClick={editButtonHandler}
                >
                    edit
                </Button>
            </td>

        </tr>
    )
}

export default Contact