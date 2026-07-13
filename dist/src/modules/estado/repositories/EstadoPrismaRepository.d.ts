import { estadoSave, IEstadoRepository } from "./IEstadoRepository.js";
export declare class EstadoPrismaRepository implements IEstadoRepository {
    create(estado: string): Promise<estadoSave>;
    get(): Promise<estadoSave[]>;
}
//# sourceMappingURL=EstadoPrismaRepository.d.ts.map