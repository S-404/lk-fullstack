import {ContactsResponse} from "../services/contactsResponse"

export interface ContactsState {
    contacts: ContactsResponse[];
    loading: boolean;
    error: null | string;
}

export interface SelectedContactState {
    contact: ContactsResponse
}

export interface FilterContactsState {
    filter: string
}


export enum ContactsActionTypes {
    FETCH_CONTACTS = "FETCH_CONTACTS",
    FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS",
    FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR",
    ADD_CONTACT = "ADD_CONTACT",
    REMOVE_CONTACT = "REMOVE_CONTACT",
    UPDATE_CONTACT = "UPDATE_CONTACT",
    SET_SELECTED_CONTACT = "SET_SELECTED_CONTACT",
    SET_FILTER_CONTACTS = "SET_FILTER_CONTACTS"
}

interface FetchContactsAction {
    type: ContactsActionTypes.FETCH_CONTACTS;
}

interface FetchContactsSuccessAction {
    type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS;
    value: ContactsResponse[];
}

interface AddContactsAction {
    type: ContactsActionTypes.ADD_CONTACT;
    value: ContactsResponse;
}

interface RemoveContactsAction {
    type: ContactsActionTypes.REMOVE_CONTACT;
    value: number;
}

interface UpdateContactsAction {
    type: ContactsActionTypes.UPDATE_CONTACT;
    value: ContactsResponse;
}

interface FetchContactsErrorAction {
    type: ContactsActionTypes.FETCH_CONTACTS_ERROR;
    value: string;
}

interface SetSelectedContactAction {
    type: ContactsActionTypes.SET_SELECTED_CONTACT;
    value: ContactsResponse;
}

interface SetFilterContactsAction {
    type: ContactsActionTypes.SET_FILTER_CONTACTS;
    value: string;
}

export type  ContactsAction =
    FetchContactsAction |
    FetchContactsSuccessAction |
    FetchContactsErrorAction |
    AddContactsAction |
    RemoveContactsAction |
    UpdateContactsAction |
    SetSelectedContactAction|
    SetFilterContactsAction
