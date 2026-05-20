import { especialidade, IEspecialidadeRepository } from "./repositories/IEspecialidadeRepository.js";



export class EspecialidadeService{
    constructor(private iespecialidadeRepository: IEspecialidadeRepository){}
    async execute(data:especialidade){
        if(!data) //verificar se foram passados os dados
        throw new Error("dados não passados")

        const especialidade = (await this.iespecialidadeRepository.get()).
        find(item => item.especialidade.trim().toUpperCase() === data.especialidade.trim().toUpperCase())

        if(especialidade)// verificando se já existe uma especialidade com o mesmo nome
            throw new Error('especialidade já registrado')

        return await this.iespecialidadeRepository.create(data)
    }

    async get(){
        const especialidade = await this.iespecialidadeRepository.get()

        if(!especialidade)
            throw new Error('nenhuma especialidade encontrado')

        return especialidade
    }

    async update(id:string,data:especialidade){
        if(!id || !data)//verificar se os dados foram passados
            throw new Error('nenhum dados foi passado')

        const idsave = (await this.iespecialidadeRepository.get()).find(item => item.Id.trim() === id.trim())

        if (!id)
            throw new Error('nenhum dado encontrado para este Id')

        return await this.iespecialidadeRepository.update(id,data)
    }

    async delete(id:string){
        if(!id)//verificar se os dados foram passados
            throw new Error('nenhum dados foi passado')

        const idsave = (await this.iespecialidadeRepository.get()).find(item => item.Id.trim() === id.trim())

        if (!id)
            throw new Error('nenhum dado encontrado para este Id')

        return await this.iespecialidadeRepository.delete(id)
    }
}