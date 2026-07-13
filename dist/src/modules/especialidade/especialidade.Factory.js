import { EspecialidadeService } from "./especialidade.Service.js";
import { EspecialidadePrismaRepository } from "./repositories/EspecialidadePrismaRepository.js";
export class EspecialidadeFactory {
    factory() {
        const especialidadePrismaRepository = new EspecialidadePrismaRepository();
        const especialidadeService = new EspecialidadeService(especialidadePrismaRepository);
        return especialidadeService;
    }
}
//# sourceMappingURL=especialidade.Factory.js.map