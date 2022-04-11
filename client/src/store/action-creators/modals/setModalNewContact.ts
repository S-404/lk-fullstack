import {Dispatch} from "redux"
import {ModalsAction, ModalsActionTypes} from "../../../types/store/modalsTypes"

export const setModalNewContact = (value: boolean) => {
    return (dispatchModals: Dispatch<ModalsAction>) => {
        dispatchModals({type: ModalsActionTypes.SET_ADD_CONTACT_MODAL_VISIBILITY, value})
    }
}
