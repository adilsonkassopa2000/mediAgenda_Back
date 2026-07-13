import { IVagaRepository, vaga } from "./repositories/IVagaRepository.js";




export class VagaService{
    constructor(private ivagaRepository: IVagaRepository){}
    async execute(data:vaga){
            if(!data) //verificar se foram passados os dados
            throw new Error("dados não passados")
    
            const vaga = (await this.ivagaRepository.get()).
            find(item => item.medicoId.trim() === data.medicoId.trim())
	
	   // Extrai apenas "2026-06-13" e "23:00:00" de cada variável
		const apenasDataNova = data.data.toISOString().substring(0, 10);
		const apenasHoraNova = data.hora.toISOString().substring(11, 19);

		const apenasDataExistente = vaga?.data.toISOString().substring(0, 10);
		const apenasHoraExistente = vaga?.hora.toISOString().substring(11, 19);

		// Compara apenas o que interessa
		if (apenasDataNova === apenasDataExistente && apenasHoraNova === apenasHoraExistente) {
		    throw new Error('Já existe uma vaga para esta data e hora');
		}
    
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
