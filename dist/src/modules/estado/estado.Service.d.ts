import { IEstadoRepository } from "./repositories/IEstadoRepository.js";
export declare class EstadoService {
    private iestadoRepository;
    constructor(iestadoRepository: IEstadoRepository);
    execute(estado: string): Promise<import("./repositories/IEstadoRepository.js").estadoSave>;
    get(): Promise<import("./repositories/IEstadoRepository.js").estadoSave[]>;
}
//# sourceMappingURL=estado.Service.d.ts.map