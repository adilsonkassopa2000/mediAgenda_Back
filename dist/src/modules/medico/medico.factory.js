import { MedicoService } from "./medico.service.js";
import { MedicoPrismaRepository } from "./repositories/MedicoPrismaRepository.js";
export class MedicoFactory {
    factory() {
        const medicoPrismaRepository = new MedicoPrismaRepository();
        const medicoService = new MedicoService(medicoPrismaRepository);
        return medicoService;
    }
}
//# sourceMappingURL=medico.factory.js.map