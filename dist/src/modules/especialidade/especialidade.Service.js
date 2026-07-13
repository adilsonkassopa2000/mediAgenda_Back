export class EspecialidadeService {
    iespecialidadeRepository;
    constructor(iespecialidadeRepository) {
        this.iespecialidadeRepository = iespecialidadeRepository;
    }
    async execute(data) {
        if (!data) //verificar se foram passados os dados
            throw new Error("dados não passados");
        const especialidade = (await this.iespecialidadeRepository.get()).
            find(item => item.especialidade.trim().toUpperCase() === data.especialidade.trim().toUpperCase());
        if (especialidade) // verificando se já existe uma especialidade com o mesmo nome
            throw new Error('especialidade já registrado');
        return await this.iespecialidadeRepository.create(data);
    }
    async get() {
        const especialidade = await this.iespecialidadeRepository.get();
        if (!especialidade)
            throw new Error('nenhuma especialidade encontrado');
        return especialidade;
    }
    async update(id, data) {
        if (!id || !data) //verificar se os dados foram passados
            throw new Error('nenhum dados foi passado');
        const idsave = (await this.iespecialidadeRepository.get()).find(item => item.Id.trim() === id.trim());
        if (!id)
            throw new Error('nenhum dado encontrado para este Id');
        return await this.iespecialidadeRepository.update(id, data);
    }
    async delete(id) {
        if (!id) //verificar se os dados foram passados
            throw new Error('nenhum dados foi passado');
        const idsave = (await this.iespecialidadeRepository.get()).find(item => item.Id.trim() === id.trim());
        if (!id)
            throw new Error('nenhum dado encontrado para este Id');
        return await this.iespecialidadeRepository.delete(id);
    }
}
//# sourceMappingURL=especialidade.Service.js.map