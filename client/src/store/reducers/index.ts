import {combineReducers} from "redux";
import {isAuthReducer} from "./authReducer";
import {contactsReducer} from "./contactsReducer"
import {modalsReducer} from "./modalsReducer"

export const rootReducer = combineReducers({
    auth: isAuthReducer,
    contacts: contactsReducer,
    modals: modalsReducer
})

export type RootState = ReturnType<typeof rootReducer>