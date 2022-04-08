import {IContact} from "./IContact";

export interface ContactsResponse{
    "id": number;
    "userId": number;
    "contact_list": IContact[];
}