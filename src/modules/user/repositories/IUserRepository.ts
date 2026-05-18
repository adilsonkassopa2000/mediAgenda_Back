export type save = {
    Id: string,
    email:string,
    senha:string,
    createdAt:Date,
    updatedAt:Date
}

export interface IUserRepository{
    creata(email:string,senha:string):Promise<save>
    get():Promise<save[]>
}