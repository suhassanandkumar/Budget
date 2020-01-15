export class userCredentials {
    public id: string;
    public name: string;
    public password: string;
    public email: string;
}

export interface DialogData {
    animal: string;
    name: string;
}

export interface transactDetails {
    userId: string;
    id: string;
    description: string;
    amount: number;
}