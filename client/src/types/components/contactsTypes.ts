import {ContactsResponse} from "../services/contactsResponse"

export interface ContactTypes {
    contact: ContactsResponse
    index: number
}

export interface ContactsTypes {
    contacts: ContactsResponse[]
}