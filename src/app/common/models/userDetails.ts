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

export interface transactDetailsBasic {
    description: string;
    amount: number;
}
export interface transactDetails extends transactDetailsBasic {
    userId: string;
    id: string;
}
