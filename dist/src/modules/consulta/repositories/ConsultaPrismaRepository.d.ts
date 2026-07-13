import { consulta, consultaSave, IConsultaRepository } from "./IConsultaRepository.js";
export declare class ConsultaPrismaRepository implements IConsultaRepository {
    upddte(id: string, data: consulta): Promise<consultaSave>;
    create(data: consulta): Promise<consultaSave>;
    get(): Promise<consultaSave[]>;
    delete(id: string): Promise<consultaSave>;
}
//# sourceMappingURL=ConsultaPrismaRepository.d.ts.map