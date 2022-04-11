import {isValidPasswordInput, isValidUsernameInput} from "./validChecks"


export const password1Check = (password1: string) => {
    return {
        isValid: isValidPasswordInput(password1) && password1.length > 0,
        isInvalid: !isValidPasswordInput(password1)
    }
}

export const password2Check = (password1: string, password2: string) => {
    return {
        isValid: password1 === password2 && password2.length > 0,
        isInvalid: password1 !== password2
    }
}

export const usernameCheck = (username: string) => {
    return {
        isValid: isValidUsernameInput(username) && username.length > 0,
        isInvalid: !isValidUsernameInput(username)
    }
}