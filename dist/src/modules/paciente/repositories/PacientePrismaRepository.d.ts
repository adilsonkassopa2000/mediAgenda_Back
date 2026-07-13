import { IPacienteRepository, paciente, pacienteSave } from "./IPacienteRepository.js";
export declare class PacientePrismaRepository implements IPacienteRepository {
    create(data: paciente): Promise<pacienteSave>;
    get(): Promise<pacienteSave[]>;
    update(id: string, data: paciente): Promise<pacienteSave>;
    delete(id: string): Promise<pacienteSave>;
}
//# sourceMappingURL=PacientePrismaRepository.d.ts.map