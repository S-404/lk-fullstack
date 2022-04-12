import {ConfirmDeleteModalsState, ModalsAction, ModalsActionTypes} from "../../types/store/modalsTypes"

const confirmDeleteModalsState: ConfirmDeleteModalsState = {
    confirmDeleteModal: false,
}

export const confirmDeleteModalsReducer = (
    state = confirmDeleteModalsState,
    action: ModalsAction): ConfirmDeleteModalsState => {
    switch (action.type) {
        case ModalsActionTypes.SET_ALERT_MODAL_VISIBILITY:
            return {...state, confirmDeleteModal: action.value}
        default:
            return state
    }
}

