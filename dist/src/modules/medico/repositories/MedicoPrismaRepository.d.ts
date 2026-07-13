import { IMedicoRepository, medico, medicoSave } from "./IMedicoRepository.js";
export declare class MedicoPrismaRepository implements IMedicoRepository {
    create(data: medico): Promise<medicoSave>;
    get(): Promise<medicoSave[]>;
    update(id: string, data: medico): Promise<medicoSave>;
    delete(id: string): Promise<medicoSave>;
}
//# sourceMappingURL=MedicoPrismaRepository.d.ts.map