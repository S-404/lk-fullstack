import React, {FC} from "react"
import {Modal, ModalBody, ModalHeader} from "reactstrap"
import {MyModalTypes} from "../../types/components/MyModalTypes"


const MyModal: FC<MyModalTypes> = (
    {
        visible,
        title,
        setVisible,
        children
    }) => {

    return (
        <Modal
            size="sm"
            toggle={() => setVisible(false)}
            isOpen={visible}
        >
            <ModalHeader toggle={() => setVisible(false)}>
                {title}
            </ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>

        </Modal>
    )
}

export default MyModal