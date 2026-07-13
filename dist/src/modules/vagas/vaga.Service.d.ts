import { IVagaRepository, vaga } from "./repositories/IVagaRepository.js";
export declare class VagaService {
    private ivagaRepository;
    constructor(ivagaRepository: IVagaRepository);
    execute(data: vaga): Promise<import("./repositories/IVagaRepository.js").vagaSave>;
    get(): Promise<import("./repositories/IVagaRepository.js").vagaSave[]>;
    update(id: string, data: vaga): Promise<import("./repositories/IVagaRepository.js").vagaSave>;
    delete(id: string): Promise<import("./repositories/IVagaRepository.js").vagaSave>;
}
//# sourceMappingURL=vaga.Service.d.ts.map