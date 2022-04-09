import {_api} from "../api"
import {AxiosResponse} from "axios"
import {ContactsResponse} from "../types/services/contactsResponse"
import {EditContactParams, NewContactParams} from "../types/services/contactsParameters"

export default class ContactsService {

    static fetchContacts(userId: number): Promise<AxiosResponse<ContactsResponse[]>> {
        return _api.get<ContactsResponse[]>(`db/contacts?userId=${userId}`)
    }

    static addContact(data: NewContactParams): Promise<AxiosResponse<ContactsResponse>> {
        return _api.post<ContactsResponse>(`db/contacts`, data)
    }

    static removeContact(id: number): Promise<AxiosResponse<ContactsResponse>> {
        return _api.delete<ContactsResponse>(`db/contacts/${id}`)
    }

    static editContact({data, id}:EditContactParams): Promise<AxiosResponse<ContactsResponse>> {
        return _api.put<ContactsResponse>(`db/contacts/${id}`, data)
    }

}

