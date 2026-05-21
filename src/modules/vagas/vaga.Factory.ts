import { VagaPrismaRepository } from "./repositories/VagaPrismaRepository.js";
import { VagaService } from "./vaga.Service.js";




export class VagaFactory{
    factory(){
        const vagaPrismaRepository = new VagaPrismaRepository()
        const vagaService = new VagaService(vagaPrismaRepository)

        return vagaService
    }
}