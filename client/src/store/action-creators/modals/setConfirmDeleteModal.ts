import {Dispatch} from "redux"
import {ModalsAction, ModalsActionTypes} from "../../../types/store/modalsTypes"

export const setConfirmDeleteModal = (value: boolean) => {
    return (dispatchModals: Dispatch<ModalsAction>) => {
        dispatchModals({type: ModalsActionTypes.SET_ALERT_MODAL_VISIBILITY, value})
    }
}