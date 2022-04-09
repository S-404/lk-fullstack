import {IContact} from "../services/contactsResponse"

export interface ContactsState {
    contacts: IContact[];
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
    value: IContact[];
}

interface FetchContactsErrorAction {
    type: ContactsActionTypes.FETCH_CONTACTS_ERROR;
    value: string;
}

export type  ContactsAction =
    FetchContactsAction |
    FetchContactsSuccessAction |
    FetchContactsErrorAction
