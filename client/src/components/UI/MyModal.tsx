import React from "react"
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap"

interface MyModalTypes {
    visible: boolean;
    setVisible: (value: boolean) => void;
    children: React.ReactElement;
    action: () => void;
}

const MyModal = ({visible, setVisible, children, action}: MyModalTypes) => {

    return (
        <Modal
            centered
            size="lg"
            toggle={()=>setVisible(false)}
            isOpen={visible}
        >
            <ModalHeader toggle={()=>setVisible(false)}>
                Modal title
            </ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={action}
                >
                    Confirm
                </Button>
                {" "}
                <Button onClick={()=>setVisible(false)}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default MyModal