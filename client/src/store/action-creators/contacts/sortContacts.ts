import {Dispatch} from "redux"
import {SortContactsAction, SortContactsActionTypes, SortingTypes} from "../../../types/store/sortContactsTypes"

export const setSortContacts = ({sortingOrder, criteria}: SortingTypes) => {
    return (dispatch: Dispatch<SortContactsAction>) => {
        dispatch({
            type: SortContactsActionTypes.SET_SORT_CONTACTS,
            value: {sortingOrder, criteria}
        })
    }
}
