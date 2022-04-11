import {Dispatch} from "redux"
import {ContactsAction, ContactsActionTypes} from "../../../types/store/contactsTypes"
import {ContactsResponse} from "../../../types/services/contactsResponse"

export const setSelectedContact = (value: ContactsResponse) => {
    return (dispatch: Dispatch<ContactsAction>) => {
        dispatch({type: ContactsActionTypes.SET_SELECTED_CONTACT, value})
    }
}
