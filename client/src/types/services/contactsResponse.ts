export interface ContactsResponse {
    id: number;
    userId: number;
    contact_list: IContact[];
}

export interface IContact {
    id: number;
    username: string;
    email: string;
    phone: string;
}