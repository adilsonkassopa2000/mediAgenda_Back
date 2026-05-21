
export type estadoSave = {
    Id: string
    estado: string
    createdAt: Date
    updatedAt: Date
}


export interface IEstadoRepository{
    create(estado:string):Promise<estadoSave>
    get():Promise<estadoSave[]>
}