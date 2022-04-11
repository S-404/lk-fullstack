export const isValidEmail = (email: string) => {
    return !!email
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

export const isValidNameInput = (text: string) => {
    return !!text.match(
        /^[а-яА-Яa-zA-Z\s]*$/
    )
}

export const isValidPhoneInput = (text: string) => {
    return !!text.match(
        /^[+]*[(]{0,1}[0-9\s]{1,3}[)]{0,1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g
    )
}

export const isValidUsernameInput = (text: string) => {
    return !!text.match(
        /^[a-zA-Z0-9_-]*$/
    )
}

export const isValidPasswordInput = (text: string) => {
    return !!text.match(
        /^(?=.*\d)[a-zA-Z0-9]{4,}$/
    // (?=.*\d)                //should contain at least one digit
    // [a-zA-Z0-9]{4,}         //should contain at least 4 from the mentioned characters
    )
}

export const password1Check = (password1: string) => {
    return {
        isValid: isValidPasswordInput(password1) && password1.length > 0,
        isInvalid: !isValidPasswordInput(password1) && password1.length > 0
    }
}

export const password2Check = (password1: string, password2: string) => {
    return {
        isValid: password1 === password2 && password2.length > 0,
        isInvalid: password1 !== password2 && password2.length > 0
    }
}

export const usernameCheck = (username: string) => {
    return {
        isValid: isValidUsernameInput(username) && username.length > 0,
        isInvalid: !isValidUsernameInput(username) && username.length > 0
    }
}