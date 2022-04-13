export interface FilterContactsState {
    filter: string
}

export enum FilterContactsActionTypes {
    SET_FILTER_CONTACTS = "SET_FILTER_CONTACTS"
}

interface SetFilterContactsAction {
    type: FilterContactsActionTypes.SET_FILTER_CONTACTS;
    value: string;
}

export type  FilterContactsAction = SetFilterContactsAction
