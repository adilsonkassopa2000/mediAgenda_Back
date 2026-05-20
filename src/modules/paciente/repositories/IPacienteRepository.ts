
export type pacienteSave = {
        Id:string, 
        nome:string,
        NIF:string,
        SNS:string | null,
        dataNascimento: Date,
        sexo:string,
        phone: number,
        morada:string,
        userId:string, 
        createdAt: Date,
        updatedAt: Date
}
export type paciente = {
    nome:string,
    NIF:string,
    SNS:string | null,
    dataNascimento: Date,
    sexo:string,
    phone: number,
    morada:string,
    userId:string, 
}


export interface IPacienteRepository{
    create(data:paciente):Promise<pacienteSave>
    get():Promise<pacienteSave[]>
    update(id:string,data:paciente):Promise<pacienteSave>
    delete(id:string):Promise<pacienteSave>
}