import {ContactsResponse} from "../services/contactsResponse"

export interface ContactsState {
    contacts: ContactsResponse[];
    loading: boolean;
    error: null | string;
}


export enum ContactsActionTypes {
    FETCH_CONTACTS = "FETCH_CONTACTS",
    FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS",
    FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR",
}

interface FetchContactsAction {
    type: ContactsActionTypes.FETCH_CONTACTS;
}

interface FetchContactsSuccessAction {
    type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS;
    res: ContactsResponse[];
}

interface FetchContactsErrorAction {
    type: ContactsActionTypes.FETCH_CONTACTS_ERROR;
    res: string;
}

export type  ContactsAction =
    FetchContactsAction |
    FetchContactsSuccessAction |
    FetchContactsErrorAction
