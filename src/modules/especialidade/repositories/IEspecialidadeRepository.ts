export type especialidadeSave = {
    Id: string,
    especialidade: string,
    descricao: string,
    img: string | null,
    createdAt: Date,
    updatedAt: Date
}

export type especialidade = {
    especialidade: string,
    descricao: string,
    img: string | null
}

export interface IEspecialidadeRepository{
    create(data:especialidade):Promise<especialidadeSave>
    get():Promise<especialidadeSave[]>
    update(id:string,data:especialidade):Promise<especialidadeSave>
    delete(id:string):Promise<especialidadeSave>
}