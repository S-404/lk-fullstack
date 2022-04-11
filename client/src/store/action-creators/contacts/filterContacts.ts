import {Dispatch} from "redux"
import {ContactsAction, ContactsActionTypes} from "../../../types/store/contactsTypes"

export const setFilterContacts = (value: string) => {
    return (dispatch: Dispatch<ContactsAction>) => {
        dispatch({type: ContactsActionTypes.SET_FILTER_CONTACTS, value})
    }
}
