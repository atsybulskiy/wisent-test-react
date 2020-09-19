export interface IRecup {
    id: number;
    date: string;
    amounts: IRecupAmount[]
}

interface IRecupAmount {
    type: string;
    amount: number;
}
