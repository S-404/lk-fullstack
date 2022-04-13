import React, {FC} from "react"
import {ContactTypes} from "../../types/components/contactsTypes"
import {Button} from "reactstrap"
import {useActions} from "../../hooks/useActions"


const Contact: FC<ContactTypes> = ({contact, index}) => {

    const {setModalEditContact, setSelectedContact, setConfirmDeleteModal} = useActions()

    const removeButtonHandler = () => {
        setSelectedContact(contact)
        setConfirmDeleteModal(true)

    }
    const editButtonHandler = () => {
        setSelectedContact(contact)
        setModalEditContact(true)
    }

    return (

        <div className="contact-card rounded m-2 p-2">
            <div className="container p-t-10 position-relative">
                <h4> {contact.username}</h4>
                <div><i>{contact.job || "-"}</i></div>
                <ul className="list-inline p-2 p-b-10 bg-light rounded">
                    <li>
                        <div><b>Phone:</b> {contact.phone}</div>
                    </li>
                    <li>
                        <div><b>Email:</b> {contact.email}</div>
                    </li>
                </ul>

                <div className="contact-card__buttons position-absolute top-0 end-0 d-flex justify-content-end">
                    <div>
                        <Button
                            size="sm"
                            outline
                            color="secondary"
                            onClick={editButtonHandler}
                        >
                            edit
                        </Button>
                        {" "}
                        <Button
                            color="danger"
                            outline
                            size="sm"
                            onClick={removeButtonHandler}
                        >
                            remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact