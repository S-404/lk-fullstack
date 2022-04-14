import {
    SortContactsAction,
    SortContactsActionTypes,
    SortContactState,
    SortingOrderTypes
} from "../../types/store/sortContactsTypes"


const sortContacts: SortContactState = {
    sort: {criteria: "username", sortingOrder: SortingOrderTypes.asc}
}

export const sortContactsReducer = (state = sortContacts, action: SortContactsAction): SortContactState => {
    switch (action.type) {
        case SortContactsActionTypes.SET_SORT_CONTACTS:
            return {sort: action.value}
        default:
            return state
    }
}

