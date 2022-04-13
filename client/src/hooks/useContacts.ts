import {useMemo} from "react"
import {ContactsResponse} from "../types/services/contactsResponse"
import {SortingTypes} from "../types/store/sortContactsTypes"


export const useSortedContactList = (
    contacts: ContactsResponse[],
    sorting: SortingTypes
) => {
    return useMemo(() => {
        if (contacts.length) {
            const sortingOrderValue = sorting.sortingOrder === "desc" ? -1 : 1
            return contacts.sort((a, b) => {
                return (a[sorting.criteria] > b[sorting.criteria]) ? sortingOrderValue : -sortingOrderValue
            })
        }
        return contacts
    }, [contacts, sorting])
}

export const useFilteredContactList = (contacts: ContactsResponse[], filterValue: string) => {
    return useMemo(() => {
        if (contacts.length && filterValue.length) {

            const compare = (text1: string, text2: string) => {
                return text1.toLowerCase().includes(text2.toLowerCase())
            }
            return contacts.filter((contact) =>
                compare(contact.username, filterValue) ||
                compare(contact.phone, filterValue) ||
                compare(contact.email, filterValue) ||
                compare(contact.job, filterValue)
            )
        }
        return contacts
    }, [contacts, filterValue])
}

export const useContacts = (contacts: ContactsResponse[], filterValue: string, sorting: SortingTypes) => {
    const filteredContacts = useFilteredContactList(contacts, filterValue)
    return useSortedContactList(filteredContacts, sorting);
}