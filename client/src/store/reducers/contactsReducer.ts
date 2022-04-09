import {ContactsAction, ContactsActionTypes, ContactsState} from "../../types/store/contactsTypes";

const contactsState: ContactsState = {
    contacts: [],
    loading: false,
    error: null,
}

export const contactsReducer = (state = contactsState, action: ContactsAction): ContactsState => {
    switch (action.type) {
        case ContactsActionTypes.FETCH_CONTACTS:
            return {loading: true, error: null, contacts: []}
        case ContactsActionTypes.FETCH_CONTACTS_SUCCESS:
            return {loading: false, error: null, contacts: action.value}
        case ContactsActionTypes.FETCH_CONTACTS_ERROR:
            return {loading: false, error: action.value, contacts: []}
        default:
            return state
    }
}

