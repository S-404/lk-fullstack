import {ContactsAction, ContactsActionTypes, FilterContactsState} from "../../types/store/contactsTypes"


const filterContacts: FilterContactsState = {
    filter: '',
}

export const filterContactsReducer = (state = filterContacts, action: ContactsAction): FilterContactsState => {
    switch (action.type) {
        case ContactsActionTypes.SET_FILTER_CONTACTS:
            return {filter: action.value}
        default:
            return state
    }
}

