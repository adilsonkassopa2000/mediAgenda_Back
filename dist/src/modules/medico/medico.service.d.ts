import { IMedicoRepository, medico } from "./repositories/IMedicoRepository.js";
export declare class MedicoService {
    private imedicoRepository;
    constructor(imedicoRepository: IMedicoRepository);
    execute(data: medico): Promise<import("./repositories/IMedicoRepository.js").medicoSave>;
    get(): Promise<import("./repositories/IMedicoRepository.js").medicoSave[]>;
    update(id: string, data: medico): Promise<import("./repositories/IMedicoRepository.js").medicoSave>;
    delete(id: string): Promise<import("./repositories/IMedicoRepository.js").medicoSave>;
}
//# sourceMappingURL=medico.service.d.ts.map