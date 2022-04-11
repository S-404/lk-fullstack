export const isValidEmail = (email: string) => {
    return !!email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

export const isValidNameInput = (text: string) => {
    return !!text.toLowerCase().match(
        /^[а-яА-Яa-zA-Z\s]*$/
    )
}

export const isValidPhoneInput = (text: string) => {
    return !!text.toLowerCase().match(
        /^[+]*[(]{0,1}[0-9\s]{1,3}[)]{0,1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g
    )
}