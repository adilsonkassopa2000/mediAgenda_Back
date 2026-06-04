export type medico = {
    nome: string,
    crm?: string,
    escola: string,
    anoExperiencia: string,
    especialidadeId:string,
    estadoId:string,
    userId:string,
    createdAt?:Date,
    updatedAt?:Date
}

export type medicoSave = {
    Id:string,
    nome: string,
    crm?: string,
    escola: string,
    anoExperiencia: string,
    especialidadeId:string,
    estadoId:string,
    userId:string,
    especialidade?: any,
    estado?: any,
    totalAppointments: number,
    todayAppointments: number,
    createdAt:Date,
    updatedAt:Date
}


export interface IMedicoRepository{
    create(data:medico):Promise<medicoSave>
    get():Promise<medicoSave[]>
    update(id:string,data:medico):Promise<medicoSave>
    delete(id:string):Promise<medicoSave>
}