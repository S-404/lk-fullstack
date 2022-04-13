import {Dispatch, SetStateAction} from "react"

export interface FormChecksTypes {
    emailInputValid: boolean;
    emailInputInvalid: boolean;
    usernameInputValid: boolean;
    usernameInputInvalid: boolean;
    phoneInputValid: boolean;
    phoneInputInvalid: boolean;
    jobInputValid: boolean;
    jobInputInvalid: boolean;
}

export interface NewContactFormInputsPropsTypes {
    username: string;
    email: string;
    phone: string;
    job: string;
    setEmail: Dispatch<SetStateAction<string>>;
    setUsername: Dispatch<SetStateAction<string>>;
    setPhone: Dispatch<SetStateAction<string>>;
    setJob: Dispatch<SetStateAction<string>>;
}


type ContactFormModeType = "edit" | "add"

export interface ContactFormTypes {
    mode: ContactFormModeType
}
