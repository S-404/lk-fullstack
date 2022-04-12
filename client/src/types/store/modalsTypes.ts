export interface ModalsState {
    editContactModal: boolean;
    addContactModal: boolean;
}

export interface ConfirmDeleteModalsState {
    confirmDeleteModal: boolean;
}

export enum ModalsActionTypes {
    SET_EDIT_CONTACT_MODAL_VISIBILITY = "SET_EDIT_CONTACT_MODAL_VISIBILITY",
    SET_ADD_CONTACT_MODAL_VISIBILITY = "SET_ADD_CONTACT_MODAL_VISIBILITY",
    SET_ALERT_MODAL_VISIBILITY = "SET_ALERT_MODAL_VISIBILITY",
}

interface SetEditContactAction {
    type: ModalsActionTypes.SET_EDIT_CONTACT_MODAL_VISIBILITY;
    value: boolean;
}

interface SetAddContactAction {
    type: ModalsActionTypes.SET_ADD_CONTACT_MODAL_VISIBILITY;
    value: boolean;
}

interface SetAlertAction {
    type: ModalsActionTypes.SET_ALERT_MODAL_VISIBILITY;
    value: boolean
}

export type  ModalsAction = SetEditContactAction | SetAddContactAction | SetAlertAction
