import {_api} from '../api'
import {AxiosResponse} from 'axios'
import {ContactsResponse} from "./types/ContactsResponse";

export default class ContactsService{

    static fetchContacts(userId:number):Promise<AxiosResponse<ContactsResponse>>{
        return _api.get<ContactsResponse>(`db/contacts/${userId}`)
    }

}

