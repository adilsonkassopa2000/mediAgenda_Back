import { IPacienteRepository, paciente } from "./repositories/IPacienteRepository.js";
export declare class PacienteService {
    private ipacienteRepository;
    constructor(ipacienteRepository: IPacienteRepository);
    execute(data: paciente): Promise<import("./repositories/IPacienteRepository.js").pacienteSave>;
    get(): Promise<import("./repositories/IPacienteRepository.js").pacienteSave[]>;
    update(id: string, data: paciente): Promise<import("./repositories/IPacienteRepository.js").pacienteSave>;
    delete(id: string): Promise<import("./repositories/IPacienteRepository.js").pacienteSave>;
}
//# sourceMappingURL=paciente.Service.d.ts.map