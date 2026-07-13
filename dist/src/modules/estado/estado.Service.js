export class EstadoService {
    iestadoRepository;
    constructor(iestadoRepository) {
        this.iestadoRepository = iestadoRepository;
    }
    async execute(estado) {
        if (!estado)
            throw new Error('dados não passados');
        const estados = (await this.iestadoRepository.get()).
            find(item => item.estado.toLocaleLowerCase().trim() === estado.toLocaleLowerCase().trim());
        if (estados)
            throw new Error('este estado já existe');
        return await this.iestadoRepository.create(estado);
    }
    async get() {
        const estados = await this.iestadoRepository.get();
        if (!estados)
            throw new Error('Nenhuma consulta encontrada');
        return estados;
    }
}
//# sourceMappingURL=estado.Service.js.map