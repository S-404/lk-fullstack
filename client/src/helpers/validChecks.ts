export const isValidEmail = (email: string) => {
    return !!email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

export const isValidStringInput = (text: string) => {
    return !!text.match(
        /^[а-яА-Яa-zA-Z\s]+/
    )
}

export const isValidPhoneInput = (text: string) => {
    return !!text.match(
        /^[+]*[(]?[0-9\s]{1,3}[)]?[(]?[0-9]{1,3}[)]?[-\s./0-9]*$/g
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