import {combineReducers} from "redux"
import {isAuthReducer} from "./authReducer"
import {contactsReducer} from "./contactsReducer"
import {modalsReducer} from "./modalsReducer"
import {selectedContactReducer} from "./selectedContactReducer"
import {filterContactsReducer} from "./filterContactsReducer"

export const rootReducer = combineReducers({
    auth: isAuthReducer,
    contacts: contactsReducer,
    modals: modalsReducer,
    selectedContact: selectedContactReducer,
    filterContacts: filterContactsReducer
})

export type RootState = ReturnType<typeof rootReducer>