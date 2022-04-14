import {ContactsResponse} from "../services/contactsResponse"

export enum SortingOrderTypes {
    asc = "asc",
    desc = "desc"
}

type  SortingOrder = SortingOrderTypes.asc | SortingOrderTypes.desc

export interface SortingTypes {
    criteria: keyof ContactsResponse;
    sortingOrder: SortingOrder
}


export interface SortContactState {
    sort: SortingTypes
}

export enum SortContactsActionTypes {
    SET_SORT_CONTACTS = "SET_SORT_CONTACTS"
}


interface SetSortContactsAction {
    type: SortContactsActionTypes.SET_SORT_CONTACTS;
    value: SortingTypes;
}

export type  SortContactsAction = SetSortContactsAction