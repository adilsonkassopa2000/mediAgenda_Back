import { consulta, IConsultaRepository } from "./repositories/IConsultaRepository.js";
export declare class ConsultaService {
    private iconsultaRepository;
    constructor(iconsultaRepository: IConsultaRepository);
    execute(data: consulta): Promise<import("./repositories/IConsultaRepository.js").consultaSave>;
    get(): Promise<import("./repositories/IConsultaRepository.js").consultaSave[]>;
    update(id: string, data: consulta): Promise<import("./repositories/IConsultaRepository.js").consultaSave>;
    delete(id: string): Promise<import("./repositories/IConsultaRepository.js").consultaSave>;
}
//# sourceMappingURL=consulta.Service.d.ts.map