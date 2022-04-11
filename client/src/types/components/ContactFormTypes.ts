import {Dispatch, SetStateAction} from "react"

export interface FormChecksTypes {
    emailInputValid: boolean;
    emailInputInvalid: boolean;
    usernameInputValid: boolean;
    usernameInputInvalid: boolean;
    phoneInputValid: boolean;
    phoneInputInvalid: boolean;
}

export interface NewContactFormInputsPropsTypes {
    username: string;
    email: string;
    phone: string;
    setEmail: Dispatch<SetStateAction<string>>;
    setUsername: Dispatch<SetStateAction<string>>;
    setPhone: Dispatch<SetStateAction<string>>;
    setInputsIsValid: Dispatch<SetStateAction<boolean>>;
}


type ContactFormModeType = "edit" | "add"

export interface ContactFormTypes {
    mode: ContactFormModeType
}
