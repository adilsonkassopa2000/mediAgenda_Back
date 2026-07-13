import { especialidade, IEspecialidadeRepository } from "./repositories/IEspecialidadeRepository.js";
export declare class EspecialidadeService {
    private iespecialidadeRepository;
    constructor(iespecialidadeRepository: IEspecialidadeRepository);
    execute(data: especialidade): Promise<import("./repositories/IEspecialidadeRepository.js").especialidadeSave>;
    get(): Promise<import("./repositories/IEspecialidadeRepository.js").especialidadeSave[]>;
    update(id: string, data: especialidade): Promise<import("./repositories/IEspecialidadeRepository.js").especialidadeSave>;
    delete(id: string): Promise<import("./repositories/IEspecialidadeRepository.js").especialidadeSave>;
}
//# sourceMappingURL=especialidade.Service.d.ts.map