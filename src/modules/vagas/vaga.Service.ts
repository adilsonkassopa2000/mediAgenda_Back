import { IVagaRepository, vaga } from "./repositories/IVagaRepository.js";




export class VagaService{
    constructor(private ivagaRepository: IVagaRepository){}
    async execute(data:vaga){
            if(!data) //verificar se foram passados os dados
            throw new Error("dados não passados")
    
            const vaga = (await this.ivagaRepository.get()).
            find(item => item.medicoId.trim() === data.medicoId.trim())
    
            if(data.data === vaga?.data && data.hora === vaga.hora)// verificando se já existe uma vaga na mesma data e na mesma hora para o medico
                throw new Error('Já existe uma vaga para esta data e hora')
    
            return await this.ivagaRepository.create(data)
    }
    
    async get(){
        const vagas = await this.ivagaRepository.get()

        if(!vagas)
            throw new Error('nenhuma vaga encontrado')

        return vagas
    }

    async update(id:string,data:vaga){
        if(!id || !data)//verificar se os dados foram passados
            throw new Error('nenhum dado foi passado')

        const idsave = (await this.ivagaRepository.get()).find(item => item.Id.trim() === id.trim())

        if (!id)
            throw new Error('nenhum dado encontrado para este Id')

        return await this.ivagaRepository.update(id,data)
    }

    async delete(id:string){
        if(!id)//verificar se os dados foram passados
            throw new Error('nenhum dado foi passado')

        const idsave = (await this.ivagaRepository.get()).find(item => item.Id.trim() === id.trim())

        if (!id)
            throw new Error('nenhum dado encontrado para este Id')

        return await this.ivagaRepository.delete(id)
    }
}