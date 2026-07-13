import { especialidade, especialidadeSave, IEspecialidadeRepository } from "./IEspecialidadeRepository.js";
export declare class EspecialidadePrismaRepository implements IEspecialidadeRepository {
    create(data: especialidade): Promise<especialidadeSave>;
    get(): Promise<especialidadeSave[]>;
    update(id: string, data: especialidade): Promise<especialidadeSave>;
    delete(id: string): Promise<especialidadeSave>;
}
//# sourceMappingURL=EspecialidadePrismaRepository.d.ts.map