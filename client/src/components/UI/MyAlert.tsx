import React from "react"
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap"
import {useActions} from "../../hooks/useActions"
import {useTypedSelector} from "../../hooks/useTypedSelector"

const MyAlert = () => {

    const {setConfirmDeleteModal,removeContact} = useActions()

    const {confirmDeleteModal} = useTypedSelector(state => state.alertModal)
    const {contact: selectedContact} = useTypedSelector(state => state.selectedContact)

    const setVisible = (value: boolean) => {
        setConfirmDeleteModal(value)
    }

    const confirmButtonHandler = () => {
        removeContact(selectedContact.id)
        setVisible(false)
    }

    return (
        <Modal
            fullscreen="md"
            toggle={() => setVisible(false)}
            isOpen={confirmDeleteModal}
        >
            <ModalHeader toggle={() => setVisible(false)}>
                Confirm deletion
            </ModalHeader>
            <ModalBody>
                <span>Are you sure you want to delete contact <b>{selectedContact.username}</b>?</span>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="danger"
                    onClick={confirmButtonHandler}
                >
                    Delete
                </Button>
                {" "}
                <Button onClick={() => setVisible(false)}>
                    Cancel
                </Button>
            </ModalFooter>

        </Modal>
    )
}

export default MyAlert