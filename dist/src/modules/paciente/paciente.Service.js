export class PacienteService {
    ipacienteRepository;
    constructor(ipacienteRepository) {
        this.ipacienteRepository = ipacienteRepository;
    }
    async execute(data) {
        if (!data) //verificar se foram passados os dados
            throw new Error("dados não passados");
        const paciente = (await this.ipacienteRepository.get()).
            find(item => item.nome.trim().toUpperCase() === data.nome.trim().toUpperCase());
        if (paciente) // verificando se já existe um medico com o mesmo nome
            throw new Error('paciente já registrado');
        return await this.ipacienteRepository.create(data);
    }
    async get() {
        const paciente = await this.ipacienteRepository.get();
        if (!paciente)
            throw new Error('nenhum paciente encontrado');
        return paciente;
    }
    async update(id, data) {
        if (!id || !data) //verificar se os dados foram passados
            throw new Error('nenhum dados foi passado');
        const idsave = (await this.ipacienteRepository.get()).find(item => item.Id.trim() === id.trim());
        if (!id)
            throw new Error('nenhum dado encontrado para este Id');
        return await this.ipacienteRepository.update(id, data);
    }
    async delete(id) {
        if (!id) //verificar se os dados foram passados
            throw new Error('nenhum dados foi passado');
        const idsave = (await this.ipacienteRepository.get()).find(item => item.Id.trim() === id.trim());
        if (!id)
            throw new Error('nenhum dado encontrado para este Id');
        return await this.ipacienteRepository.delete(id);
    }
}
//# sourceMappingURL=paciente.Service.js.map