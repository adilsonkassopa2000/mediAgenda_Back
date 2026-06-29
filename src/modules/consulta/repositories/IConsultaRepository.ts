export type consultaSave = {
    Id: string
    pacienteId: string
    especialidadeId: string
    medicoId: string
    vagaId: string
    estadoId: string
    createdAt: Date
    updatedAt: Date
}

export type consulta = {
    pacienteId: string
    especialidadeId: string
    medicoId: string
    vagaId: string
    estadoId: string
}

export interface IConsultaRepository{
    create(data:consulta):Promise<consultaSave>
    get():Promise<consultaSave[]>
    upddte(id:string,data:consulta):Promise<consultaSave>
    delete(id:string):Promise<consultaSave>
}
