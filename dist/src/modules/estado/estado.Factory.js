import { EstadoService } from "./estado.Service.js";
import { EstadoPrismaRepository } from "./repositories/EstadoPrismaRepository.js";
export class EstadoFactory {
    factory() {
        const estadoPrismaRepository = new EstadoPrismaRepository();
        const estadoService = new EstadoService(estadoPrismaRepository);
        return estadoService;
    }
}
//# sourceMappingURL=estado.Factory.js.map