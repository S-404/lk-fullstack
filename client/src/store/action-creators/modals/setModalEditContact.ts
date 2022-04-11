import {Dispatch} from "redux"
import {ModalsAction, ModalsActionTypes} from "../../../types/store/modalsTypes"

export const setModalEditContact = (value: boolean) => {
    return (dispatchModals: Dispatch<ModalsAction>) => {
        dispatchModals({type: ModalsActionTypes.SET_EDIT_CONTACT_MODAL_VISIBILITY, value})
    }
}