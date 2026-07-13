import { PacienteService } from "./paciente.Service.js";
import { PacientePrismaRepository } from "./repositories/PacientePrismaRepository.js";
export class PacienteFactory {
    factory() {
        const pacientePrismaRepository = new PacientePrismaRepository();
        const pacienteService = new PacienteService(pacientePrismaRepository);
        return pacienteService;
    }
}
//# sourceMappingURL=paciente.Factory.js.map