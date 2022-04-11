import {ModalsAction, ModalsActionTypes, ModalsState} from "../../types/store/modalsTypes"

const modalsState: ModalsState = {
    editContactModal: false,
    addContactModal: false,
}

export const modalsReducer = (state = modalsState, action: ModalsAction): ModalsState => {
    switch (action.type) {
        case ModalsActionTypes.SET_ADD_CONTACT_MODAL_VISIBILITY:
            return {...state, addContactModal: action.value}
        case ModalsActionTypes.SET_EDIT_CONTACT_MODAL_VISIBILITY:
            return {...state, editContactModal: action.value}
        default:
            return state
    }
}

