export interface NewContactParams{
    userId: number;
    username: string;
    email: string;
    phone: string;
}

export interface EditContactParams{
    data: NewContactParams;
    id: number
}