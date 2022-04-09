import {Dispatch} from "redux"
import {ContactsAction, ContactsActionTypes} from "../../../types/store/contactsTypes"
import ContactsService from "../../../services/contactsService"
import axios from "axios"

export const removeContact = (id: number) => {
    return async (dispatch: Dispatch<ContactsAction>) => {
        try {
            dispatch({type: ContactsActionTypes.FETCH_CONTACTS})
            await ContactsService.removeContact(id)
            dispatch({type: ContactsActionTypes.REMOVE_CONTACT, value: id})
        } catch (e) {
            let errMsg
            console.log(e)
            if (axios.isAxiosError(e)) {
                errMsg = e?.response?.data?.message
            }
            let message = errMsg ? errMsg : "connection failed"
            dispatch({
                type: ContactsActionTypes.FETCH_CONTACTS_ERROR,
                value: message
            })
        }
    }

}