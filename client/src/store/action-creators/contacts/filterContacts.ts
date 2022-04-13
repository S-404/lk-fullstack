import {Dispatch} from "redux"
import {FilterContactsAction, FilterContactsActionTypes} from "../../../types/store/filterContactsTypes"

export const setFilterContacts = (value: string) => {
    return (dispatch: Dispatch<FilterContactsAction>) => {
        dispatch({type: FilterContactsActionTypes.SET_FILTER_CONTACTS, value})
    }
}
