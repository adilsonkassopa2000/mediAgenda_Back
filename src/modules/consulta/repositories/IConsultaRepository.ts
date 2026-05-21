export type consultaSave = {
    Id: string
    pacienteId: string
    especialidadeId: string
    data: Date
    hora: Date
    estadoId: string
    createdAt: Date
    updatedAt: Date
}

export type consulta = {
    pacienteId: string
    especialidadeId: string
    data: Date
    hora: Date
    estadoId: string
}

export interface IConsultaRepository{
    create(data:consulta):Promise<consultaSave>
    get():Promise<consultaSave[]>
    upddte(id:string,data:consulta):Promise<consultaSave>
    delete(id:string):Promise<consultaSave>
}