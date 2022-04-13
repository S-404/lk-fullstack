import {isValidEmail, isValidStringInput, isValidPhoneInput} from "./validChecks"

export const usernameCheck = (username: string) => {
    return {
        isValid: isValidStringInput(username) && username.length > 0,
        isInvalid: !isValidStringInput(username)
    }
}
export const jobCheck = (job: string) => {
    return {
        isValid: isValidStringInput(job) || job.length === 0,
        isInvalid: !isValidStringInput(job) && job.length > 0
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