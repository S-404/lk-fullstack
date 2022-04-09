import {Dispatch} from "redux"
import {ContactsAction, ContactsActionTypes} from "../../types/store/contactsTypes"
import ContactsService from "../../services/contactsService"
import axios from "axios"

export const fetchContacts = (userId:number) => {
    return async (dispatch: Dispatch<ContactsAction>) => {
        try {
            dispatch({type: ContactsActionTypes.FETCH_CONTACTS})
            const response = await ContactsService.fetchContacts(userId)
            dispatch({type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS, value: response.data.contact_list})
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