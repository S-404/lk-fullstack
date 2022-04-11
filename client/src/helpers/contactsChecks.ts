import {isValidEmail, isValidNameInput, isValidPhoneInput} from "./validChecks"

export const usernameCheck = (username: string) => {
    return {
        isValid: isValidNameInput(username) && username.length > 0,
        isInvalid: !isValidNameInput(username)
    }
}

export const emailCheck = (email: string) => {
    return {
        isValid: isValidEmail(email) || email.length === 0,
        isInvalid: !isValidEmail(email) && email.length > 0
    }
}

export const phoneCheck = (phone: string) => {
    return {
        isValid: isValidPhoneInput(phone) || phone.length === 0,
        isInvalid: !isValidPhoneInput(phone) && phone.length > 0
    }
}