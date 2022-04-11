import {ContactsAction, ContactsActionTypes, SelectedContactState} from "../../types/store/contactsTypes"
import {ContactsResponse} from "../../types/services/contactsResponse"


const selectedContact: SelectedContactState = {
    contact: {} as ContactsResponse,
}

export const selectedContactReducer = (state = selectedContact, action: ContactsAction): SelectedContactState => {
    switch (action.type) {
        case ContactsActionTypes.SET_SELECTED_CONTACT:
            return {contact: {...action.value}}
        default:
            return state
    }
}

