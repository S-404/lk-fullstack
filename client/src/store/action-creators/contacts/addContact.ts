import {Dispatch} from "redux"
import {ContactsAction, ContactsActionTypes} from "../../../types/store/contactsTypes"
import ContactsService from "../../../services/contactsService"
import axios from "axios"
import {NewContactParams} from "../../../types/services/contactsParameters"

export const addContact = (data: NewContactParams) => {
    return async (dispatch: Dispatch<ContactsAction>) => {
        try {
            dispatch({type: ContactsActionTypes.FETCH_CONTACTS})
            const response = await ContactsService.addContact(data)
            dispatch({type: ContactsActionTypes.ADD_CONTACT, value: response.data})
        } catch (e) {
            let errMsg
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