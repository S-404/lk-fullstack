import {combineReducers} from "redux";
import {isAuthReducer} from "./authReducer";
import {contactsReducer} from "./contactsReducer"

export const rootReducer = combineReducers({
    auth: isAuthReducer,
    contacts: contactsReducer
})

export type RootState = ReturnType<typeof rootReducer>