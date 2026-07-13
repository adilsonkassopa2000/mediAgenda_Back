export class ConsultaService {
    iconsultaRepository;
    constructor(iconsultaRepository) {
        this.iconsultaRepository = iconsultaRepository;
    }
    async execute(data) {
        if (!data)
            throw new Error('os dados não foram passados');
        return await this.iconsultaRepository.create(data);
    }
    async get() {
        const consulta = await this.iconsultaRepository.get();
        if (!consulta)
            throw new Error('Nenhuma consulta encontrada');
        return consulta;
    }
    async update(id, data) {
        if (!id || !data)
            throw new Error('nenhum dado passsado');
        const idSave = (await this.iconsultaRepository.get()).
            find(item => item.Id === id);
        if (!idSave)
            throw new Error('esta consulta não existe');
        return await this.iconsultaRepository.upddte(id, data);
    }
    async delete(id) {
        const idSave = (await this.iconsultaRepository.get()).
            find(item => item.Id === id);
        if (!idSave)
            throw new Error('esta consulta não existe');
        return await this.iconsultaRepository.delete(id);
    }
}
//# sourceMappingURL=consulta.Service.js.map