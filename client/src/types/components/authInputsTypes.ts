import {Dispatch, SetStateAction} from "react"

export interface RegistrationCheckFormState {
    usernameIsValid: boolean;
    usernameIsInvalid: boolean;
    password1IsValid: boolean;
    password1IsInvalid: boolean;
    password2IsValid: boolean;
    password2IsInvalid: boolean;
}

export interface RegistrationInputsTypes {
    username: string;
    password1: string;
    password2: string;
    setUsername: Dispatch<SetStateAction<string>>;
    setPassword1: Dispatch<SetStateAction<string>>;
    setPassword2: Dispatch<SetStateAction<string>>;

}
