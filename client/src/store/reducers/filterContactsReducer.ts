import {
    FilterContactsAction,
    FilterContactsActionTypes,
    FilterContactsState
} from "../../types/store/filterContactsTypes"


const filterContacts: FilterContactsState = {
    filter: "",
}

export const filterContactsReducer = (state = filterContacts, action: FilterContactsAction): FilterContactsState => {
    switch (action.type) {
        case FilterContactsActionTypes.SET_FILTER_CONTACTS:
            return {filter: action.value}
        default:
            return state
    }
}

