import {ContactsAction, ContactsActionTypes, ContactsState} from "../../types/store/contactsTypes"

const contactsState: ContactsState = {
    contacts: [],
    loading: false,
    error: null,
}

export const contactsReducer = (state = contactsState, action: ContactsAction): ContactsState => {
    switch (action.type) {
        case ContactsActionTypes.FETCH_CONTACTS:
            return {...state, loading: true, error: null}
        case ContactsActionTypes.FETCH_CONTACTS_SUCCESS:
            return {loading: false, error: null, contacts: action.value}
        case ContactsActionTypes.FETCH_CONTACTS_ERROR:
            return {...state, loading: false, error: action.value}
        case ContactsActionTypes.ADD_CONTACT:
            return {
                ...state, loading: false, error: null,
                contacts: [...state.contacts, action.value]
            }
        case ContactsActionTypes.REMOVE_CONTACT:
            const objAfterRemove = state.contacts.filter((contact) => contact.id !== action.value)
            console.log(state.contacts.length, objAfterRemove.length, action.value)
            return {
                ...state, loading: false, error: null,
                contacts: [...objAfterRemove,]
            }
        case ContactsActionTypes.UPDATE_CONTACT:
            const newContactsObj = [...state.contacts]
            const objIndex = newContactsObj
                .findIndex((contact) => contact.id === action.value.id)
            newContactsObj[objIndex] = {...action.value}
            return {
                ...state, loading: false, error: null,
                contacts: [...newContactsObj]
            }

        default:
            return state
    }
}

