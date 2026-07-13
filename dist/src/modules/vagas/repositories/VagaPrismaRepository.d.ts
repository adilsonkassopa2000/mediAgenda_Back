import { IVagaRepository, vaga, vagaSave } from "./IVagaRepository.js";
export declare class VagaPrismaRepository implements IVagaRepository {
    create(data: vaga): Promise<vagaSave>;
    get(): Promise<vagaSave[]>;
    update(id: string, data: vaga): Promise<vagaSave>;
    delete(id: string): Promise<vagaSave>;
}
//# sourceMappingURL=VagaPrismaRepository.d.ts.map