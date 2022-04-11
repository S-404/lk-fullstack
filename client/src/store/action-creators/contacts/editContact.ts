import {Dispatch} from "redux"
import {ContactsAction, ContactsActionTypes} from "../../../types/store/contactsTypes"
import ContactsService from "../../../services/contactsService"
import axios from "axios"
import {EditContactParams} from "../../../types/services/contactsParameters"

export const editContact = ({data, id}: EditContactParams) => {
    return async (dispatch: Dispatch<ContactsAction>) => {
        try {
            dispatch({type: ContactsActionTypes.FETCH_CONTACTS})
            const response = await ContactsService.editContact({data, id})
            dispatch({type: ContactsActionTypes.UPDATE_CONTACT, value: response.data})
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