

export type vagaSave = {
    Id: string
    data: Date
    hora: Date
    medicoId: string
    createdAt: Date
    updatedAt: Date
}

export type vaga = {
    data: Date
    hora: Date
    medicoId: string
}



export interface IVagaRepository{
    create(data:vaga):Promise<vagaSave>
    get():Promise<vagaSave[]>
    update(id:string,data:vaga):Promise<vagaSave>
    delete(id:string):Promise<vagaSave>
}