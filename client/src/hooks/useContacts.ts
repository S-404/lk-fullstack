import {useMemo} from "react"
import {ContactsResponse} from "../types/services/contactsResponse"


export const useFilteredContactList = (contacts: ContactsResponse[], filterValue: string) => {

    return useMemo(() => {
        if (contacts.length && filterValue.length) {

            const compare = (text1: string, text2: string) => {
                return text1.toLowerCase().includes(text2.toLowerCase())
            }
            return contacts.filter((contact) =>
                compare(contact.username, filterValue)||
                compare(contact.phone, filterValue) ||
                compare(contact.email, filterValue)
            )
        }
        return contacts
    }, [contacts, filterValue])
}
